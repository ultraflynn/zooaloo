"use strict"

module.exports = () => {
  const paddedTokens = (player) => {
      return (player.completed.monkey ? " " : "M") +
             (player.completed.bird ? " " : "B") +
             (player.completed.bigcat ? " " : "C") +
             (player.completed.african ? " " : "A") +
             (player.completed.insect ? " " : "I") +
             (player.completed.reptile ? " " : "R")
     }

  return {
    show(positions) {
      console.log("--------------------------------")
      console.log(`-            |${positions.showPlayer('player1', '16')}T${positions.showPlayer('player2', '16')}|             -`)
      console.log(`-  Monkeys  /|${positions.showPlayer('player1', '15')} ${positions.showPlayer('player2', '15')}|             -`)
      console.log(`-            |${positions.showPlayer('player1', '14')}X${positions.showPlayer('player2', '14')}|  Birds      -`)
      console.log(`-            |${positions.showPlayer('player1', '13')} ${positions.showPlayer('player2', '13')}|/            -`)
      console.log("--------------------------------")
      console.log(`-           /|${positions.showPlayer('player1', '12')} ${positions.showPlayer('player2', '12')}|             -`)
      console.log(`-   Big Cats |${positions.showPlayer('player1', '11')}T${positions.showPlayer('player2', '11')}|             -`)
      console.log(`-            |${positions.showPlayer('player1', '10')}X${positions.showPlayer('player2', '10')}|  African    -`)
      console.log(`-            |${positions.showPlayer('player1', '9')} ${positions.showPlayer('player2', '9')}|/    Animals -`)
      console.log("--------------------------------")
      console.log(`-            |${positions.showPlayer('player1', '8')}T${positions.showPlayer('player2', '8')}|             -`)
      console.log(`-  Insects  /|${positions.showPlayer('player1', '7')} ${positions.showPlayer('player2', '7')}|             -`)
      console.log(`-            |${positions.showPlayer('player1', '6')}X${positions.showPlayer('player2', '6')}|   Reptiles  -`)
      console.log(`-            |${positions.showPlayer('player1', '5')} ${positions.showPlayer('player2', '5')}|/            -`)
      console.log("--------------------------------")
      console.log(`-  Food     /|${positions.showPlayer('player1', '4')} ${positions.showPlayer('player2', '4')}| P1 ${positions.tokensLeft('player1')}   -`)
      console.log(`-            |${positions.showPlayer('player1', '3')}X${positions.showPlayer('player2', '3')}| P2 ${positions.tokensLeft('player2')}   -`)
      console.log(`- P1 ${positions.tokensLeft('player1')}  |${positions.showPlayer('player1', '2')} ${positions.showPlayer('player2', '2')}|             -`)
      console.log(`- P2 ${positions.tokensLeft('player2')}  |${positions.showPlayer('player1', '1')}S${positions.showPlayer('player2', '1')}|/  Cleaning  -`)
      console.log("--------------------------------")
    }
  }
}()

// S == Start
// X = random card
// T = train
