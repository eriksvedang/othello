(ns lt.plugins.othello
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.othello.model :as model])
  (:require-macros [lt.macros :refer [defui behavior]]))

;; The model

(def m (atom (model/make-model)))
@m


;; Graphics

(defn coordinate->id [[x y]]
  (str "coord_" (+ (* 10 x) y)))

(defn get-square [coordinate]
  (first (dom/$$ (str "#" (coordinate->id coordinate)) js/document)))

(defn get-piece [square]
  (first (dom/$$ ".piece" square)))

(defui square [this x y]
  [:span.square {:id (coordinate->id [x y])}
   [:div.piece ""]]
  :click #(object/raise this :make-move x y))

(defui game-panel [this]
  [:div.panel [:div.board (for [y (range 8)]
                            [:div
                             (for [x (range 8)]
                               (square this x y))])]])

(defn move-type->class [piece]
  ({:w :white
    :b :black} piece :none))

(defn set-piece [coord move-type]
  (let [square (get-square coord)
        piece (get-piece square)
        css-class (move-type->class move-type)]
    (dom/add-class piece css-class)))

(defn reset-piece [piece]
  (dom/remove-class piece :white)
  (dom/remove-class piece :black))

(defn reset-pieces []
  (doall (map reset-piece (dom/$$ ".piece" js/document))))

(defn refresh-graphics []
  (reset-pieces)
  (doall (for [[pos color] (model/get-board @m)]
           (set-piece pos color))))



; Behaviors

(behavior ::on-make-move
          :triggers #{:make-move}
          :reaction (fn [this x y]
                      (swap! m model/try-move [x y])
                      (refresh-graphics)
                      (console/log (str "move at [" x " " y "]"))))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(object/object* ::othello.game
                :tags [:othello.game]
                :behaviors [::on-make-move ::on-close-destroy]
                :name "othello"
                :init (fn [this]
                        (game-panel this)))

(def game (object/create ::othello.game))


; Commands

(cmd/command {:command ::play-othello
              :desc "othello: New Game"
              :exec (fn []
                      (tabs/add-or-focus! game)
                      (reset! m (model/make-model))
                      (refresh-graphics))})

