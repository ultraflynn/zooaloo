"use strict"

module.exports = (dependencies, context, nextState, handleError) => {
  let questions = [
      {
        type: "confirm",
        name: "ready",
        message: "Are you ready to play?",
        default: "Y"
      }
    ]
  dependencies.inquirer.prompt(questions, (answer) => {
    nextState("playerTurn")
  })
}
