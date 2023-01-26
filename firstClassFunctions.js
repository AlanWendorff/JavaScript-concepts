// First class functions

// To understand this concept we need to go over some behaviour of functions.

// Characteristics:
//   1. Functions can be assigned to variables
//   2. Functions can be passed as arguments to other functions
//   3. Functions can be returned from other functions

// Examples

// 1. Functions can be assigned to variables
const talk = () => {
  return "Hello!";
};

console.log(talk()); // "Hello!"

// 2. Functions can be passed as arguments to other functions
const talkToPerson = (talk, person) => {
  return `${talk()} ${person}`;
};

console.log(talkToPerson(talk, "Alan"));

// 3. Functions can be returned from other functions
const talker = (words) => {
  return (person) => {
    return `${words} ${person}`;
  };
};

const sayThanksToPerson = talker("Thanks for reading!");
console.log(sayThanksToPerson("my Friend"));

const sayCheersToPerson = talker("Cheers");
console.log(sayCheersToPerson("for you"));
