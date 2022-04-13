let sum
let Cards=[]
let cardShapes=["images/spades.png","images/hearts.png","images/club.png","images/diamond.png"]
let blackjacked
let isAlive = null
let message = null
let j = 0
let player = {
    name: "Ali" ,
    money: 23
}
let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name + ": $" + player.money
function startGame (){
    let firstcard = [randomNumber(),randomShape()];
    let secondcard = [randomNumber(),randomShape()];
    sum = firstcard[0] + secondcard[0]
    cards = [firstcard,secondcard]
    blackjacked = false
    isAlive = true
    let pressed = true;
    renderGame()
    
}
function renderGame () {
    let playercardsEl = document.getElementById("playercards-el")
    playercardsEl.textContent= "Cards: "
    for (let i = 0; i < cards.length ; i++) {
        
        playercardsEl.textContent += " " + cards[i][0]   ;
        
    }
    $("#start-btn").hide();
    if (pressed=true){
        document.getElementById("start-btn").onclick= null
    }
   
    if (sum <= 20) {
    message = "do you want another?"
    $(".btn").show();
    } else if (sum === 21){
        message = "YYYEESSS BLACKJACK"
        blackjacked = true
    } else {
        message = "You Lost!"
        isAlive = false
        $(".btn").hide()
    }  
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = "Sum:" + " " + sum
    let messageEl = document.querySelector("#message-el")
    messageEl.textContent= message
    
    var cardsComponent = document.createElement("div");
    cardsComponent.innerHTML = '<img id="card-img" class="card-img" src= width="50" height="50"> <h4 class="cardnumber" id="cardnumber-el"></h4>'
    document.getElementById("insertCardDivsHere").appendChild(cardsComponent)
    cardsComponent.className = "container";
    document.getElementById("card-img").src = cards[j][1]
    document.getElementById("card-img").id = null
    document.getElementById("cardnumber-el").textContent = cards[j][0]
    document.getElementById("cardnumber-el").id = null
    j+=1
    if (j===1) {
        var cardsComponent = document.createElement("div");
        cardsComponent.innerHTML = '<img id="card-img" class="card-img" src= width="50" height="50"> <h4 class="cardnumber" id="cardnumber-el"></h4>'
        document.getElementById("insertCardDivsHere").appendChild(cardsComponent)
        cardsComponent.className = "container";
        document.getElementById("card-img").src = cards[j][1]
        document.getElementById("card-img").id = null
        document.getElementById("cardnumber-el").textContent = cards[j][0]
        document.getElementById("cardnumber-el").id = null
        j+=1
    }
}



function anotherCard (){
    if (blackjacked===false && isAlive===true) {
    newcard=[randomNumber(),randomShape()]
    cards.push(newcard)
    sum += newcard[0]
    if (newcard===11) {
        if (sum >21 ) {
            sum -= 10
        }
    }
    renderGame()
}
}
function randomNumber () {
   let random = Math.floor(Math.random()*13) + 1
   if (random>10) {
       random=10
   }
   else if (random===1) {
       random=11
   }
    return random
}
function randomShape () {
    let shapeNumber = Math.floor(Math.random()*4)
    return cardShapes[shapeNumber]
}


