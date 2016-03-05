module.exports = (dependencies, context, nextState, handleError) => {
  nextState(context.board.moveUp())
}
