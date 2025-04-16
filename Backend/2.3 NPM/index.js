// var generateName=require("sillyname");
// var sillyName=generateName();

// console.log(`My name is ${sillyName}.`);

// var superhero=require("superheros");
// var superHeroName=superhero();
// console.log(`I am ${superHeroName}!`);

const superheroes = require("superheroes");
const name = superheroes.random();
console.log(`I am ${name}!`);

