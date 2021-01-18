document.addEventListener('DOMContentLoaded', () => {

// Card options

const cardArray = [
    {
        name: 'cow',
        img: 'img/cow.png'
    },
    {
        name: 'cow',
        img: 'img/cow.png'
    },
    {
        name: 'dog',
        img: 'img/dog.png'
    },
    {
        name: 'dog',
        img: 'img/dog.png'
    },
    {
        name: 'donkey',
        img: 'img/donkey.png'
    },
    {
        name: 'donkey',
        img: 'img/donkey.png'
    },
    {
        name: 'duck',
        img: 'img/duck.png'
    },
    {
        name: 'duck',
        img: 'img/duck.png'
    },
    {
        name: 'sheep',
        img: 'img/sheep.png'
    },
    {
        name: 'sheep',
        img: 'img/sheep.png'
    },
    {
        name: 'cat',
        img: 'img/cat.png'
    },
    {
        name: 'cat',
        img: 'img/cat.png'
    },
    {
        name: 'cocq',
        img: 'img/cocq.png'
    },
    {
        name: 'cocq',
        img: 'img/cocq.png'
    },
    {
        name: 'goat',
        img: 'img/goat.png'
    },
    {
        name: 'goat',
        img: 'img/goat.png'
    }
]

cardArray.sort(()=>0.5 - Math.random());

const grid=document.querySelector('.grid');
const resultDisplay=document.querySelector('#result');
var cardsChosen=[];
var cardsChosenId=[];
var cardsWon=[];

//create the board
function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        var card=document.createElement('img');
        card.setAttribute('src', 'img/star.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}

//check for matches
function checkForMatch(){
    var cards=document.querySelectorAll('img');
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if (cardsChosen[0]===cardsChosen[1]){
        alert ('¡BRAVO! Encontraste una pareja');
        cards[optionOneId].setAttribute('src', 'img/blank.png');
        cards[optionTwoId].setAttribute('src', 'img/blank.png');
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'img/star.png');
        cards[optionTwoId].setAttribute('src', 'img/star.png');
        alert('¡Oohh! Probá otra vez');
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardsWon.length;
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent= '¡FELICIDADES! ¡Las encontraste todas!'
    }
}
 
//flip your card
function flipCard(){
    var cardId=this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length===2){
        setTimeout(checkForMatch, 500)
    }  

}

createBoard();

}
)