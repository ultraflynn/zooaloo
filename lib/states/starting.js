module.exports = (dependencies, states, context, nextState, handleError) => {
  console.log("Starting")
  nextState(states.ready)
}
