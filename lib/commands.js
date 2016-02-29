"use strict"
module.exports = (config) => {
  const out = config.console,
        game = config.game,

  return {
    help() {
      out.log("help - show this message")
      out.log("player1 - Set the name of player1")
      out.log("player2 - Set the name of player2")
      out.log("board - Show the game board")
      return game.prompt
    },
    begin() {
      out.log("*** Welcome to Zooaloo! ***")
      return game.prompt
    },
    quit() {
        out.log("Thankyou for playing Zooaloo!")
        out.log("Goodbye")
    },
    player1(name) {
      if (game.started) {
        out.log("The game is already started you cannot change a player name")
      } else {
        game.player1 = name
        out.log(`Player 1 is now called ${name}`)
      }
      return game.prompt
    },
    player2(name) {
      if (game.started) {
        out.log("The game is already started you cannot change a player name")
      } else {
        game.player2 = name
        out.log(`Player 2 is now called ${name}`)
      }
      return game.prompt
    },
    start() {
      game.start()
      return game.prompt
    }
    board() {
      board.show(game)
      return game.prompt
    },
    card() {
      out.log(cards.next())
      return game.prompt
    }
  }
}
