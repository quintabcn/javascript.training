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
    }
]

const grid=document.querySelector('.grid');

//create the board
function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        var card=document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard)
    }
}

})