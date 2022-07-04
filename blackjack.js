// 1. Create two variables, firstCard and secondCard
// Set their values to a random nubmer between 2-11

let cards = []
let sum=0
let hasBlackJack = false
let isAlive = false
let message = " "
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card"
        isAlive = true
    }
    
    else if (sum === 21) {
        message = "Wohoo! You have got a BlackJack!!"
        hasBlackJack = true
    }
    
    else {
        message = "You are out of the game!"
        isAlive = false
    }

    cardsEl.textContent = "Cards: " 
    for (let i=0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    messageEl.textContent =  message
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (hasBlackJack === false && isAlive === true){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
   
}

function getRandomCard(){
    let randomNum = Math.floor(1 + Math.random() * 13) 
    if (randomNum == 1)
    {
        return 11;
    }
    else if (randomNum > 10)
    {
        return 10;
    }
    return randomNum
}





