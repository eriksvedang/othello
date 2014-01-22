(ns lt.plugins.othello.model)

(defn make-model []
  {:current-player :b
   :moves {[3 3] :w
           [3 4] :b
           [4 3] :b
           [4 4] :w}})

(defn get-board [model]
  (:moves model))

(def other-player {:w :b
                   :b :w})

(defn can-make-move-at? [model pos]
  (not (get-in model [:moves pos])))

(defn place-move [model pos]
  (let [current-player (:current-player model)]
    (-> model
        (assoc-in [:moves pos] current-player)
        (assoc :current-player (other-player current-player)))))

(defn move [model [x y]]
  (let [pos [x y]]
    (if (can-make-move-at? model pos)
      (place-move model pos)
      model)))

(-> (make-model)
    (move [2 4])
    (move [3 4])
    get-board)
