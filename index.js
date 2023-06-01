var randomNumbr1=Math.floor(Math.random()*6)+1;

var randomImage="dice"+ randomNumbr1 +".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImage);


var randomNumbr2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+ randomNumbr2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumbr2 < randomNumbr1){
    document.querySelector("h1").innerHTML="player one won!!";
}
else if(randomNumbr2 > randomNumbr1){
    document.querySelector("h1").innerHTML="player 2 won!!";
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
}
