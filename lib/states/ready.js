module.exports = (dependencies, states, context, nextState, handleError) => {
  console.log("Ready")
  nextState(states.playerTurn)
}
