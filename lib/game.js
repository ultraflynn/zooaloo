"use strict"

module.exports = (config) => {
  const paddedTokens = (player) => {
      return (player.completed.monkey ? " " : "M") +
             (player.completed.bird ? " " : "B") +
             (player.completed.bigcat ? " " : "C") +
             (player.completed.african ? " " : "A") +
             (player.completed.insect ? " " : "I") +
             (player.completed.reptile ? " " : "R")
    },
    players = {
      player1: {
          name: "Player 1",
          location: 0,
          completed: {
            reptile: false,
            african: false,
            monkey: false,
            insect: false,
            bird: false,
            bigcat: false
          },
      },
      player2: {
          name: "Player 2",
          location: 0,
          completed: {
            reptile: false,
            african: false,
            monkey: false,
            insect: false,
            bird: false,
            bigcat: false
          },
      }
      currentMessage = " ",
      currentDefault = "board",
      state = require("./states/ready")()
  }

  return {
    started: false,
    prompt: [
      {
        type: "input",
        name: "command",
        message: currentMessage,
        default: currentDefault
      }],
    tokensLeft(player) {
      return paddedTokens(players[player])
    },
    showPlayer(player, position) {
      return " " // TODO
    },
    setPrompt(message, default) {
      currentMessage = message
      currentDefault = default
    }
  }
}
