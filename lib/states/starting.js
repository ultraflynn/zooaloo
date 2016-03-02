"use strict"

module.exports = (dependencies, context, nextState, handleError) => {
  context.positions = {
    showPlayer() {
      return " "
    },
    tokensLeft() {
    }
  }
  context.board.show(context.positions)

  nextState("ready")
}
