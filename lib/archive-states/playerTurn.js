"use strict"

module.exports = (dependencies, context, nextState, handleError) => {
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
    nextState("finished")
  })
}
