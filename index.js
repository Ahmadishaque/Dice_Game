var imgs = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var rand1 = Math.floor(Math.random()*6);
var rand2 = Math.floor(Math.random()*6);
var image1 = document.querySelectorAll("img");
var flag1=0, flag2=0;

function player1(){
    image1[0].setAttribute("src", imgs[rand1]);
    flag1=1;
}

function player2(){
    image1[1].setAttribute("src", imgs[rand2]);
    flag2=1;

    if(rand1>rand2){
        document.querySelector("h1").textContent = "Player 1 wins";
    }
    else if(rand2>rand1){
        document.querySelector("h1").textContent = "Player 2 wins";
    }
    else{
        document.querySelector("h1").textContent = "Game Draw";
    }
}






