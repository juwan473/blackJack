let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sum =0

let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let playerEl= document.getElementById("player-el")
let sumEl = document.getElementById("sum-el")

let player = {
    name: "Player",
    chips: 500
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive=true
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    cards = [firstCard,secondCard]
    sum= firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack ===false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
} 