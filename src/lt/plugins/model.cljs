(ns lt.plugins.othello.model)

(def starting-moves {[3 3] :w
                     [3 4] :b
                     [4 3] :b
                     [4 4] :w})

(def black-wins {[0 0] :b [1 1] :w [1 0] :w})

(defn get-board [model]
  (:moves model))

(def other-player {:w :b
                   :b :w})

(def dirs [[-1 -1][0 -1][1 -1]
           [-1  0]      [1  0]
           [-1  1][0  1][1  1]])

(defn add-pos [a b]
  (vec (map + a b)))

(defn inside-board? [[x y]]
  (and (<= 0 x 7)
       (<= 0 y 7)))

(defn get-strip [model pos dir]
  (let [start (add-pos pos dir)]
    (take-while #(and inside-board? (get-in model [:moves %])) (iterate #(add-pos % dir) start))))

; (get-strip [3 3] [-1 0])

(defn get-strips [model pos]
  (map #(get-strip model pos %) dirs))

; (get-strips (make-model) [3 3])

(defn is-color? [model color pos]
  (= color (get-in model [:moves pos])))

; (is-color? (make-model) :w [3 4])
; (is-color? (make-model) :w [4 4])

(defn get-enemy-part-of-strip [model strip enemy-color]
  (if (every? #(is-color? model enemy-color %) strip)
    []
    (take-while #(is-color? model enemy-color %) strip)))

(defn get-flipped-ones [model pos player]
  (let [enemy (other-player player)
        strips (get-strips model pos)]
    (mapcat #(get-enemy-part-of-strip model % enemy) strips)))

; (get-flipped-ones (make-model) [2 3] :b)

(defn flip [model pos]
  (update-in model [:moves pos] other-player))

; (flip (make-model) [3 3])

(defn flips [model move-pos player]
  (reduce flip model (get-flipped-ones model move-pos player)))

; (flips (make-model) [2 3] :b)
; (reduce flip (make-model) [])

(defn pos-empty? [model pos]
  (not (get-in model [:moves pos])))

(defn will-flip-something? [model pos player]
  (not (empty? (get-flipped-ones model pos player))))

(defn can-make-move-at? [model pos]
  (and (pos-empty? model pos)
       (will-flip-something? model pos (:current-player model))))

; (can-make-move-at? (make-model) [1 3])
; (can-make-move-at? (make-model) [2 3])

(defn get-possible-moves [model]
  (remove nil? (for [x (range 8)
                     y (range 8)]
                 (when (can-make-move-at? model [x y])
                   [x y]))))

; (get-possible-moves (make-model))

(defn pass-turn [model]
  (let [current-player (:current-player model)]
    (assoc model :current-player (other-player current-player))))

(defn place-move [model pos]
  (let [current-player (:current-player model)]
    (-> model
        (assoc-in [:moves pos] current-player)
        (flips pos current-player)
        (assoc-in [:last-move] pos)
        pass-turn)))

(defn try-move [model [x y]]
  (if (empty? (get-possible-moves model))
    (pass-turn model)
    (let [pos [x y]]
      (if (can-make-move-at? model pos)
        (place-move model pos)
        model))))

(defn make-model-with-ai [black-ai white-ai]
  {:current-player :b
   :moves starting-moves
   :last-move nil
   :ai {:w white-ai
        :b black-ai}})

(defn simple-ai [model]
  (let [moves (get-possible-moves model)]
    (if (seq moves)
      (rand-nth moves))))

(defn make-model []
  (make-model-with-ai nil simple-ai))

(defn ai-turn [model]
  (let [player (:current-player model)
        ai (get-in model [:ai player])]
    (if ai
      (if-let [move (ai model)]
        (place-move model move)
        (pass-turn model))
      model)))

(defn humans-turn? [model]
  (nil? (get-in model [:ai (:current-player model)])))

(defn score [model player]
  (count (filter #(= % player) (vals (get-in model [:moves])))))

(defn winner-text [model]
  "")
  ;(if (empty? (get-possible-moves ))))

(defn get-last-move [model]
  (:last-move model))

(-> (make-model)
    (try-move [2 3])
    ;(score :w)
    ai-turn
    get-last-move
;    humans-turn?
;    get-board
    )

