"use strict"

module.exports = (dependencies, states, context, nextState, handleError) => {
  console.log("Player Turn")
  let questions = [
      {
        type: "confirm",
        name: "roll",
        message: "Roll dice?",
        default: "Y"
      }
    ]

  dependencies.inquirer.prompt(questions, (answer) => {
    console.log("Rolling dice")
    nextState(states.finished)
  })
}
