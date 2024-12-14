var food = document.getElementById("food");
var blood = document.getElementById("blood");
var color = document.getElementById("color");
var gift = document.getElementById("gift");
var feeling = document.getElementById("feeling");

const foodArray = new Array("SWEET", "SOFT", "SOUR", "SALTY", "PAIN", "COLD");
const bloodArray = new Array("A", "AB", "B", "C", "D");
const colorArray = new Array("RED", "BLUE", "GREEN", "CYAN")
const giftArray = new Array("KINDNESS", "MIND", "AMBITION", "BRAVERY", "VOICE");
const feelingArray = new Array("LOVE", "HOPE", "DISGUST", "FEAR");

function favoriteFood() {
    var randomNumber = Math.floor(Math.random() * foodArray.length);
    var randomAnswer = foodArray[randomNumber];
    return randomAnswer;
}

function favoriteBlood() {
    var randomNumber = Math.floor(Math.random() * bloodArray.length);
    var randomAnswer = bloodArray[randomNumber];
    return randomAnswer;
}

function favoriteColor() {
    var randomNumber = Math.floor(Math.random() * colorArray.length);
    var randomAnswer = colorArray[randomNumber];
    return randomAnswer;
}

function angelGift() {
    var randomNumber = Math.floor(Math.random() * giftArray.length);
    var randomAnswer = giftArray[randomNumber];
    return randomAnswer;
}

function angelFeeling() {
    var randomNumber = Math.floor(Math.random() * feelingArray.length);
    var randomAnswer = feelingArray[randomNumber];
    return randomAnswer;
}

(function changeableInfo() {
    food.innerHTML = favoriteFood();
    blood.innerHTML = favoriteBlood();
    color.innerHTML = favoriteColor();
    gift.innerHTML = angelGift();
    feeling.innerHTML = angelFeeling();
})();