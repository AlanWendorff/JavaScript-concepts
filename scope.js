// JavaScript have a lexical scoping:
// The variable scope is determined by reading the code without actually executing.

// What is scope?
// The scope is the *current context of execution* in which values and expressions are "visible" or can be referenced.
// e.g. in the real life each word can have a different meaning depending on context

// Pay attention, in JavaScript exists *the context of a variable* and *context of execution*, there are two differents concepts but
// when we talk about variable scope we are refering to context of execution

// Types of scopes

// GLOBAL SCOPE
const FOOD = "Apple";                // The global context allows access to the data from anywhere in the code

if (true) {
  console.log("I'm eating an", FOOD);
}

console.log(FOOD);                   // It would print the value stored into the FOOD constant

// LOCAL SCOPE

if (true) {
  const OBJECT = "Spoon";            // The local context doesn't allow to access the data out the code block
  console.log("I'm storing a", OBJECT, "into the drawer");
}

console.log(OBJECT);                 // It would fail because the constant OBJECT is declared into a if statement

// Code blocks are those code portions that are wrapped by brackets {  }

// A good practice is declare the data with the most reduced scope possible