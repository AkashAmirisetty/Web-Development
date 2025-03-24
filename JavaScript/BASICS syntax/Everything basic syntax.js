// BASICS length, uppercase lowercase, slicing function usage
// -----------------------------------------------------------------
// var name= prompt("What is your name?");
// var n= name.length;
// var start = name.slice(0,1);
// var end = name.slice(1,n);
// alert("Hello, "+ start.toUpperCase()+ end.toLowerCase())
// BASICS numbers using
// -------------------------------------------------------------------
// var dogage= prompt("Enter the age of the dog");
// var humanage= (dogage-2)*4+21;
// alert("Your dog is "+humanage+" "+"years old in human years.");

// var x=5;
// x+=5;
// console.log(x)

// var x = 3;
// var y = x++;
// y += 1;

// FUNCTIONS
// function getMilk() {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buyMilk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
// }
// getMilk(); 

// function getMilk(money){
//     var bottles= Math.floor(money/1.5)
    
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy " + bottles+" bottles of milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
// }
// getMilk(5);

function getMilk(money){
    var bottles= Math.floor(money/1.5)
    
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + bottles+" bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money%1.5
}
var change= getMilk(5)
console.log(change)






