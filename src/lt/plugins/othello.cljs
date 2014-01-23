(ns lt.plugins.othello
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.util.js :as util]
            [lt.plugins.othello.model :as model])
  (:require-macros [lt.macros :refer [defui behavior]]))

;; The model

(def m (atom (model/make-model)))
@m


;; Graphics

(defn coordinate->id [[x y]]
  (str "coord_" x "_" y))

(defn get-square [coordinate]
  (dom/$ (str "#" (coordinate->id coordinate)) js/document))

(defn get-piece [square]
  (dom/$ ".piece" square))

(defui square [this x y]
  [:span.square {:id (coordinate->id [x y])}
   [:div.piece ""]]
  :click #(object/raise this :make-move x y))

(defui game-panel [this]
  [:div.panel [:div.board (for [y (range 8)]
                            [:div
                             (for [x (range 8)]
                               (square this x y))])]
   [:p#msg ""]])

(defn get-piece-at-pos [pos]
  (get-piece (get-square pos)))

(defn color-with-anim [color]
  (keyword (str (name color) (if true "-anim"))))

(defn right-color? [piece color]
  (or (dom/has-class? piece color)
      (dom/has-class? piece (color-with-anim color))))

(defn nothing-there? [piece]
  (or (dom/has-class? piece :option)
      (empty? (remove false? (map #(dom/has-class? piece %) ["w" "w-anim" "b" "b-anim"])))))

;(.contains (.-classList (get-piece-at-pos [3 4])) "w")
;(nothing-there? (get-piece-at-pos [3 3]))
;(nothing-there? (get-piece-at-pos [1 1]))
;(right-color? (get-piece-at-pos [3 3]) :b)

(defn reset-piece [piece]
  (dom/remove-class piece :w)
  (dom/remove-class piece :w-anim)
  (dom/remove-class piece :b)
  (dom/remove-class piece :b-anim)
  (dom/remove-class piece :option)
  (dom/remove-class piece :last-move))

(defn set-piece [pos color]
  (let [piece (get-piece-at-pos pos)
        nothing-there (nothing-there? piece)
        already-right-color (right-color? piece color)]
    (reset-piece piece)
    (if (or nothing-there already-right-color)
      (dom/add-class piece color)
      (dom/add-class piece (mod-color color)))))

;(set-piece [2 2] :w)
;(dom/remove-class piece :option)

(defn reset-pieces []
  (doall (map reset-piece (dom/$$ ".piece" js/document))))

(defn remove-option-class-on-all []
  (doall (map #(dom/remove-class % :option) (dom/$$ ".piece" js/document))))

(defn set-message [text]
  (set! (.-innerHTML (dom/$ "#msg")) text))

(defn refresh-graphics []
  ;(reset-pieces)
  (doall (for [[pos color] (model/get-board @m)]
           (set-piece pos color)))
  (remove-option-class-on-all)
  (when (model/humans-turn? @m)
    (doall (for [pos (model/get-possible-moves @m)]
                                        (set-piece pos :option))))
  (if-let [pos (model/get-last-move @m)]
    (let [last-piece (get-piece-at-pos pos)]
      (dom/add-class last-piece :last-move)))
  (set-message (str
                " Black " (model/score @m :b)
                " &mdash; "
                " White " (model/score @m :w)
                (model/winner-text @m))))




; Behaviors


(behavior ::refresh-gfx
          :triggers #{:refresh}
          :reaction (fn [this]
                      (refresh-graphics)))

(behavior ::let-ai-move
          :triggers #{:ai-move}
          :debounce 2000
          :reaction (fn [this]
                      (swap! m model/ai-turn)
                      (refresh-graphics)
                      (if-not (model/humans-turn? @m)
                        (object/raise this :ai-move))))

(behavior ::on-make-move
          :triggers #{:make-move}
          :reaction (fn [this x y]
                      (when (model/humans-turn? @m)
                        (do
                          (swap! m model/try-move [x y])
                          (if-not (model/humans-turn? @m) ; the move was successful
                            (do
                              (object/raise this :ai-move)
                              (refresh-graphics)))))))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(object/object* ::othello.game
                :tags [:othello.game]
                :behaviors [::on-make-move ::let-ai-move ::refresh-gfx]
                :name "Othello"
                :init (fn [this]
                        (game-panel this)))

(def game (object/create ::othello.game))


; Commands

(cmd/command {:command ::play-othello
              :desc "Othello: Start New Game"
              :exec (fn []
                      (tabs/add-or-focus! game)
                      (reset! m (model/make-model))
                      (reset-pieces)
                      (refresh-graphics)
                      (object/raise game :ai-move))})

