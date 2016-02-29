"use strict"

module.exports = (dependencies) => {
  let states = {}, // States
      context = {} // Game context

  // http://stackoverflow.com/questions/5364928/node-js-require-all-files-in-a-folder
  function loadStates() {
    let normalizedPath = require("path").join(__dirname, "states")

    require("fs").readdirSync(normalizedPath).forEach(function(file) {
      // http://stackoverflow.com/questions/4250364/how-to-trim-a-file-extension-from-a-string-in-javascript
      states[file.slice(0, -3)] = require("./states/" + file)
    })
  }

  // Create a promise to transition to the new state
  function transition(state, context, callback) {
    return new Promise((resolve, reject) => {
      state(dependencies, states, context, resolve, reject)
    }).then(callback).catch((reason) => {
      console.log(reason)
    })
  }

  // Main game loop. Keep transitioning to new states if there is one
  let enter = (state) => {
    if (state) transition(state, context, enter)
  }

  return {
    start() {
      loadStates()
      enter(states.starting) // Initial state is STARTING
    }
  }
}
