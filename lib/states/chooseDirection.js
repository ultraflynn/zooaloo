"use strict"

module.exports = (dependencies, context, nextState, handleError) => {
  if (context.board.isPlayerAtBottom()) {
    nextState("moveUp")
  } else if (context.board.isPlayerAtTop()) {
    nextState("moveDown")
  }

  let questions = [
      {
        type: "expand",
        message: "Move up or down: ",
        name: "direction",
        choices: [
          {key: "u", name: "Up", value: "moveUp"},
          {key: "d", name: "Down", value: "moveDown"}
        ]
      }
    ]
  dependencies.inquirer.prompt(questions, (answer) => {
    nextState(answer.direction)
  })
}
