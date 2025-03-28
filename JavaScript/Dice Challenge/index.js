var randomNumber1=Math.random()
randomNumber1=randomNumber1*6
randomNumber1=Math.floor(randomNumber1)+1

var randomDIce1 = "dice"+ randomNumber1+".png"
var randomImage1= "images/"+randomDIce1
var image1= document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImage1)


var randomNumber2 = Math.random()
randomNumber2=randomNumber2*6
randomNumber2=Math.floor(randomNumber2)+1

var randomDIce2="dice"+ randomNumber2+".png"
var randomImage2="images/"+randomDIce2
var image2= document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImage2)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw! 📢";

}

