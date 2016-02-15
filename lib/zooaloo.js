"use strict"

module.exports = () => {
  let inquirer = require("inquirer"),
      questions = [
        {
          type: "input",
          name: "command",
          message: " ",
          default: "help"
        }
      ],
      commands = {
        help() {
          console.log("help - show this message")
          console.log("player1 - Set the name of player1")
          console.log("player2 - Set the name of player2")
        },
        player1(name) {
          console.log(`Player 1 is called ${name}`)
        },
        player2(name) {
          console.log(`Player 2 is called ${name}`)
        }
      }

  function ask() {
    inquirer.prompt(questions, function(answer) {
      if (answer.command === "quit") {
        console.log("Thankyou for playing Zooaloo!")
      } else {
        // TODO Split answer into parts. First string is command, all others are arguments
        commands["help"]()
        ask()
      }
    })
  }

  return {
    start() {
      console.log("*** Zooaloo! ***");
      ask()
    },
  }
}()
