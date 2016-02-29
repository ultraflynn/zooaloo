"use strict"

module.exports = () => {
  return {
    show(game) {
      console.log("--------------------------------")
      console.log(`-            |${game.showPlayer('player1', '16')}T${game.showPlayer('player2', '16')}|             -`)
      console.log(`-  Monkeys  /|${game.showPlayer('player1', '15')} ${game.showPlayer('player2', '15')}|             -`)
      console.log(`-            |${game.showPlayer('player1', '14')}X${game.showPlayer('player2', '14')}|  Birds      -`)
      console.log(`-            |${game.showPlayer('player1', '13')} ${game.showPlayer('player2', '13')}|/            -`)
      console.log("--------------------------------")
      console.log(`-           /|${game.showPlayer('player1', '12')} ${game.showPlayer('player2', '12')}|             -`)
      console.log(`-   Big Cats |${game.showPlayer('player1', '11')}T${game.showPlayer('player2', '11')}|             -`)
      console.log(`-            |${game.showPlayer('player1', '10')}X${game.showPlayer('player2', '10')}|  African    -`)
      console.log(`-            |${game.showPlayer('player1', '9')} ${game.showPlayer('player2', '9')}|/    Animals -`)
      console.log("--------------------------------")
      console.log(`-            |${game.showPlayer('player1', '8')}T${game.showPlayer('player2', '8')}|             -`)
      console.log(`-  Insects  /|${game.showPlayer('player1', '7')} ${game.showPlayer('player2', '7')}|             -`)
      console.log(`-            |${game.showPlayer('player1', '6')}X${game.showPlayer('player2', '6')}|   Reptiles  -`)
      console.log(`-            |${game.showPlayer('player1', '5')} ${game.showPlayer('player2', '5')}|/            -`)
      console.log("--------------------------------")
      console.log(`-  Food     /|${game.showPlayer('player1', '4')} ${game.showPlayer('player2', '4')}| P1 ${game.tokensLeft('player1')}   -`)
      console.log(`-            |${game.showPlayer('player1', '3')}X${game.showPlayer('player2', '3')}| P2 ${game.tokensLeft('player2')}   -`)
      console.log(`- P1 ${game.tokensLeft('player1')}  |${game.showPlayer('player1', '2')} ${game.showPlayer('player2', '2')}|             -`)
      console.log(`- P2 ${game.tokensLeft('player2')}  |${game.showPlayer('player1', '1')}S${game.showPlayer('player2', '1')}|/  Cleaning  -`)
      console.log("--------------------------------")
    }
  }
}

// S == Start
// X = random card
// T = train
