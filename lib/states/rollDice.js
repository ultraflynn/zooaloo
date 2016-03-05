"use strict"

module.exports = (dependencies, context, nextState, handleError) => {
  context.board.show()
  context.board.setMovesLeft(Math.floor(Math.random() * 6) + 1)
  nextState("chooseDirection")
}
