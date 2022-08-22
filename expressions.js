// In JavaScript an expression is a unit of code that produces one value.

// Primary expressions are those types of data that can produce a value by itself.
// Primitive types: STRING, INTEGER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BIGINT, THIS, etc.

const A_STRING = "This is a string";
const AN_INTEGER = 707;
const A_BOOLEAN = true;
const NULL = null;
const UNDEFINED = undefined;
const SYMBOL = Symbol("foo");
const THIS = this;
const BIG_INTEGER = 7073433142031527159n;
const NAME_OF_OTHER_VARIABLE = A_STRING;

// The above types are called "primary expressions" because thay can produce a value with "one word".

// There are more "complex" expressions like Objects, Arrays.

const MY_OBJECT = {                // The value of each key is an expression.
  name: "Myob",
  lastname: "Ject",
  born_date: "12/10/2000",
};

const MY_ARRAY = [10, 20, 5 * 5];  // An array is conformed by values, or something that produces a value, that are expressions.

// Important thing about this types of expressions.
// In JavaScript the Arrays, Objects and Functions are validated as references. 

//    <EF72C>
const TEAM = {
  team_name: "9z",
  team_id: "9-z",
  twitter_url: "https://twitter.com/9zTeam",
};

//    <3D499>
const FRUITS = ["apple", "orange", "banana"]; 


//    <B160E>
const sumFunction = () => {
  return 21 + 100;
};

// References are the positions in memory where the objects are stored, but is transparent to us.

// Look below, I created two objects with same props and values, each object is stored in different memory position.

//    <CD71F>
const TEAM_1 = {
  team_name: "Astralis",
};

//    <FC59E>
const TEAM_2 = {
  team_name: "Astralis",
};

// If we compare both objects, they will not be the same, because the compiler is going to compare the references.

TEAM_1 === TEAM_2; // returns false




// Other types of expressions: 

const RETURNED_VALUE = sumFunction();  // Here we are using the returned value of a function as expression. Functions returns always some type of value.
const OBJECT_PROP = TEAM["team_name"]; // Here we are using an object prop as expression.
const ARRAY_PROP  = FRUITS[2];         // Here we are using an array prop as expression.

const SUM = function(a, b) {           // This is a "Function expression". This constant stores an expected value returned by an anonymous function.
  return a + b;
};

const AsyncFunction = async () => {    // This is an "async function expression". 
 console.log("Fetching API..."); 
};

await AsyncFunction();                 // This is the "Invocation of an async function".  

function* IDGenerator() {              // This is a "Generator function".         
  let index = 0;
  while (index < 3) yield index++;
}

// All those expressions can produce new values