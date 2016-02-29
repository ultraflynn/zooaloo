"use strict"

module.exports = () => {
  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = (array) => {
      const currentIndex = array.length

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        let temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
    currentCard = 0

  const deck = shuffle([
      {
        text: "EMERGENCY!!!! Go to the Monkey House because a monkey has hurt itself.",
        action: "move",
        location: 4
      },
      {
        text: "A giraffe eats all your food so go and get more."
      },
      {
        text: "A gust of wind blown the food out of your bucket. Go and get more."
      },
      {
        text: "Somebody gives you a broom. Use it to clean an animals cage."
      },
      {
        text: "You find food for any animal on the ground. Use it feed an animal."
      },
      {
        text: "You find a mop left by another keeper. Use it to clean any animal."
      },
      {
        text: "EMERGENCY!!! Go to the Reptile House because a lizard has escaped."
      },
      {
        text: "You find a buggy. Go to your destination now."
      },
      {
        text: "You trip up and your bucket of water goes flying. Go and get some more."
      },
      {
        text: "The birds have made a mess. Clean them again."
      },
      {
        text: "A snake is shedding, go to the Reptile House."
      },
      {
        text: "A monkey needs medical care. Go to the Monkey House."
      },
      {
        text: "You find a tractor heading to your destination. It breaks down. Miss a go."
      }
    ])

  return {
    next() {
      if (currentCard === deck.length) {
        currentCard = 1
        return deck[0]
      } else {
        return deck[currentCard++]
      }
    }
  }
}
