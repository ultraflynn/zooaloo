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
      state(dependencies, context, resolve, reject)
    }).then(callback).catch((reason) => {
      console.log(reason)
    })
  }

  // Main game loop. Keep transitioning to new states until there isn't one
  let enter = (stateName) => {
    if (stateName) {
      let state = states[stateName]
      if (state) {
        console.log("[state] " + stateName)
        transition(state, context, enter)
      } else {
        console.log("Missing state: " + stateName)
      }
    }
  }

  loadStates()

  return {
    start(initialState, initialContext) {
      context = initialContext
      enter(initialState)
    }
  }
}
