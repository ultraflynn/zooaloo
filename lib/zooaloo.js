"use strict"

module.exports = (dependencies) => {
  let engine = require("./engine")(dependencies)

  return {
    start() {
      engine.start("rollDice",
        {
          cards: require("./cards"),
          board: require("./board")
        })
    }
  }
}
