"use strict"

module.exports = (dependencies) => {
  let engine = require("./engine")(dependencies)

  return {
    start() {
      engine.start("starting",  // Initial state is STARTING
        {
          cards: require("./cards"),
          board: require("./board")
        })
    }
  }
}
