// F R E E C O D E C A M P . O R G javascript tutorial

// inline comments 

/*
multi-line comments
*/

// Data Types and Variables
let name = "John"; // string
let age = 30; // number
let isStudent = false; // boolean
let hobbies = ["reading", "traveling", "gaming"]; // array
let address = { city: "New York", zip: "10001" }; // object
let score = null; // null (no vlue or nothing)
let undef; // undefined (not defined yet)
let uniqueId = Symbol("id"); //symbol (unique and immutable)

var myName = "anisha"
myName = 8 // var can be re-assigned and re-declared

const pi = 3.14; // const cannot be re-assigned or re-declared
let radius = 5;
radius = 10; // let can be re-assigned but not re-declared

// Declearing and Initializing Variables
var a;
var b=2;
a=7; //no need to assign because already done before 
console.log(a+b); //like printing in python

//case sensitivity 
//declerations
var studlyCApVar;
var properCamelCase;
var titleCaseOver;
//assignments
studlyCApVar=10;
properCamelCase="A String";
titleCaseOver=9000; // must have same case as how it was declared

// Functions
function greet(person) {
    return `Hello, ${person}!`;
}

const add = (a, b) => a + b;

//adding numbers
var sum = 10+10;
console.log(sum);//20

//subtracting numbers
var difference = 45-33;
console.log(difference);//12

//multiplying numbers
var product = 8*10;
console.log(product);//80

//dividing numbers
var quotient = 66/33;
console.log(quotient); //2

//incrementing numbers
var myVar = 87;
myVar++;
console.log(myVar); //88

//decrementing numbers
var myVar = 11;
myVar--;
console.log(myVar); //10

//decimal numbers/floats
var Decimal = 5.7;
console.log(Decimal); //5.7

//multiplying decimals
var product = 2.0*2.5;
console.log(product); //5

//dividing decimals
var quotient = 4.4/2.0;
console.log(quotient); //2.2

//finding a remainder
var remainder;
remainder = 11%3; //modulus operator like in python
console.log(remainder); //2

//compound assignment with augmented addition
var a = 3;
var b = 17;

a += 12; // a = a + 12
b += 9;  // b = b + 9

//compound assignment with augmented subtraction
var a = 11;
var b = 9;

a -= 6; // a = a - 6
b -= 15; // b = b - 15

//compound assignment with augmented multiplication
var a = 5;
var b = 12;

a *= 5; // a = a * 5
b *= 3; // b = b * 3

//compound assignment with augmented division
var a = 48;
var b = 108;

a /= 12; // a = a / 12
b /= 4; // b = b / 4

//declaring string variables
var myFirstName = "Anisha";
var myLastName = "Imran";
console.log(myFirstName + " " + myLastName); //Anisha Imran

//escaping literal quotes in strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; //backslash escapes double quotes - no longer interpreted as string end character
console.log(myStr); //I am a "double quoted" string inside "double quotes".

//escaping literal quotes in strings
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; //single quotes allow double quotes to be used without escaping
console.log(myStr); //<a href="http://www.example.com" target="_blank">Link</a>

/**************
 CODE OUTPUT 
    \' single quote
    \" double quote
    \\ backslash
    \n newline
    \r carriage return
    \t tab
    \b backspace
    \f form feed
 **************/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; //new line, tab, backslash
console.log(myStr);
/*
FirstLine
    \SecondLine
ThirdLine
*/

//concatenating strings techniques
var myStr = "This is the start. " + "This is the end.";
console.log(myStr); //This is the start. This is the end.

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr); //This is the first sentence. This is the second sentence.

//constructing strings with variables (like python)
var myName = "Anisha";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr); //My name is Anisha and I am well!

//appending variables to strings
var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr); //Learning to code is awesome!

//finding length of string
var firstNameLength = 0;
var firstName = "Anisha";
firstNameLength = firstName.length;
console.log(firstNameLength); //6

//bracket notation to find first character in string (like arrays concept in python)
var firstLetterOfFirstName = "";
var firstName = "Anisha";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName); //A (zero base indexing)

//bracket notation to find nth character in string
var thirdLetterOfFirstName = "";
var firstName = "Anisha";
thirdLetterOfFirstName = firstName[2];
console.log(thirdLetterOfFirstName); //i

//bracket notation to find last character in string
var lastLetterOfFirstName = "";
var firstName = "Anisha";
lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName); //a

//bracket notation to find nth to last character in string
var secondToLastLetterOfFirstName = "";
var firstName = "Anisha";
secondToLastLetterOfFirstName = firstName[firstName.length - 2];
console.log(secondToLastLetterOfFirstName); //h

//word blanks function 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));//The big dog ran to the store quickly
console.log(wordBlanks("bike", "slow", "flew", "slowly"));//The slow bike flew to the store slowly

//arrays
var ourArray = ["Anisha", 23]; //array with mixed data types
var myArray = [["Bulls", 23], ["White Sox", 45]]; //nested array

//accessing array data with indexes
var myArray = [50, 60, 70];
var myData = myArray[0]; //50
console.log(myData); //50

//modifying array data with indexes
var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray); //[45, 64, 99]

//accessing multi-dimensional arrays with indexes
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
var myData = myArray[2][1]; //8
console.log(myData); //8

//manipulating arrays with push()
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); //like appending in python
console.log(myArray); //[["John", 23], ["cat", 2], ["dog", 3]]

//manipulating arrays with pop()
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(); //like pop in python - removes last element
console.log(myArray); //[["John", 23]]
console.log(removedFromMyArray); //["cat", 2]

//manipulating arrays with shift()
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); //like pop in python but removes first element
console.log(myArray); //[["dog", 3]]
console.log(removedFromMyArray); //["John", 23]

//manipulating arrays with unshift()
var myArray = [["dog", 3]];
myArray.unshift(["John", 23]); //like append in python but adds element to beginning of array
console.log(myArray); //[["John", 23], ["dog", 3]]

//functions
function reusableFunction() {
    console.log("Hello World");
}

reusableFunction(); //calls the function

//function with arguments
function functionWithArgs(a, b/*parameters*/) {
    console.log(a + b);
}

functionWithArgs(1, 2/*arguments*/ ); //3
functionWithArgs(7, 9); //16

//global scope and functions
var myGlobal = 10; //global variable

function fun1() {
    oopsGlobal = 5; //if you don't use var, let, or const, the variable becomes global
}  

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2(); //myGlobal: 10 oopsGlobal: 5

//local scope and functions
function myLocalScope() {
    var myVar = 5; //local variable
    console.log(myVar);
} 
myLocalScope(); //5
//console.log(myVar); //error - myVar is not defined

//global vs local scope in functions
var outerWear = "T-Shirt"; //global variable

function myOutfit() {
    var outerWear = "sweater"; //local variable
    return outerWear;
}

console.log(myOutfit()); //sweater beacuse inside the function local variable is used
console.log(outerWear); //T-Shirt
//local scope has priority over global scope    

//returning a value from a function with return
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); //3
console.log(minusSeven(0)); //-7
console.log(minusSeven(7)); //0

//returning a value from a function with return
function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5)); //25
console.log(timesFive(2)); //10
console.log(timesFive(0)); //0

//understanding undefined value returned from a function
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

addThree();
addFive();
console.log(sum); //8

//assignment with a returned value
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed); //5

//stand in line function
// in computer science a queue is a data structure that follows the FIFO (First In First Out) principle
function nextInLine(arr, item) {
    arr.push(item); //adds item to end of array
    return arr.shift(); //removes and returns first item of array
}
var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); //returns 1
console.log("After: " + JSON.stringify(testArr)); //After: [2,3,4,5,6]

//boolean values
function welcomeToBooleans() {
    return true; //boolean value
}

//if statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) { //if condition is true
        return "Yes, that was true";
    }
    return "No, that was false"; //if condition is false
}

console.log(trueOrFalse(true)); //Yes, that was true
console.log(trueOrFalse(false)); //No, that was false

//equality operator
function testEqual(val) {
    if (val == 12) { //== operator checks for equality of value only single = means assignment
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10)); //Not Equal
console.log(testEqual(12)); //Equal
console.log(testEqual("12")); //Equal (because value is same)

//strict equality operator (===). no type convertion (eg. string 12 is not equal to number 12)
function testStrict(val) {
    if (val === 7) { //=== operator checks for equality of value and type
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10)); //Not Equal
console.log(testStrict(7)); //Equal
console.log(testStrict("7")); //Not Equal (because data type is different)

//inequality operator
function testNotEqual(val) {
    if (val != 99) { //!= operator checks for inequality of value only
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10)); //Not Equal
console.log(testNotEqual(99)); //Equal
console.log(testNotEqual("99")); //Equal (because value is same)

//strict inequality operator (!==). no type convertion (eg. string 99 is not equal to number 99)
function testStrictNotEqual(val) {
    if (val !== 17) { //!== operator checks for inequality of value and type
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10)); //Not Equal
console.log(testStrictNotEqual(17)); //Equal
console.log(testStrictNotEqual("17")); //Not Equal (because data type is different)

/***********************
  Comparison Operators
************************
equal to operator (==)
strict equal to operator (===)
not equal operator (!=)
strict not equal operator (!==)
greater than operator (>)
less than operator (<)
greater than or equal to operator (>=)
less than or equal to operator (<=)
************************/

/***********************
  Logical Operators
************************
&& means AND in python
|| means OR in python
! means NOT in python
************************/

//else statements
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}

console.log(testElse(4)); //5 or Smaller
console.log(testElse(5)); //5 or Smaller
console.log(testElse(6)); //Bigger than 5

//else if statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(0)); //Smaller than 5
console.log(testElseIf(5)); //Between 5 and 10
console.log(testElseIf(10)); //Between 5 and 10
console.log(testElseIf(15)); //Greater than 10

//logical order in if else statements
//structure order to make sure always getting the right output

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "Small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    }
    else {
        return "Huge";
    }
}

console.log(testSize(0)); //Tiny
console.log(testSize(5)); //Small
console.log(testSize(10)); //Medium
console.log(testSize(15)); //Large
console.log(testSize(20)); //Huge

//chaining if else statements
function testChaining(val) {
    if (val < 5) {
        return "Less than 5";
    }
    else if (val < 10) {
        return "Less than 10";
    }
    else {
        return "Greater than or equal to 10";
    }
}

console.log(testChaining(0)); //Less than 5
console.log(testChaining(5)); //Less than 10
console.log(testChaining(10)); //Greater than or equal to 10
console.log(testChaining(15)); //Greater than or equal to 10

//switch statements
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1)); //alpha
console.log(caseInSwitch(2)); //beta
console.log(caseInSwitch(3)); //gamma
console.log(caseInSwitch(4)); //delta
console.log(caseInSwitch(5)); // (no output)

//default option in switch statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        default:
            answer = "stuff";
            break;
    }   
    return answer;
}

console.log(switchOfStuff(a));  //apple
console.log(switchOfStuff(5));  //stuff

//multiple identical options in switch statements
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(1)); //Low
console.log(sequentialSizes(4)); //Mid
console.log(sequentialSizes(7)); //High

//returning boolean values from functions
function isLess(a, b) { // avoids using if else statements which is much longer
    return a < b; //returns true or false
}

console.log(isLess(10, 15)); //true
console.log(isLess(15, 10)); //false

//returning early pattern from functions
function abTest(a, b) {
    if (a < 0 || b < 0) { //if a or b is less than 0
        return undefined; //exits the function
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2)); //8
console.log(abTest(-2, 2)); //undefined
console.log(abTest(2, -2)); //undefined
console.log(abTest(2, 8)); //50

// objects (like OOP in python)
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// dot notation to access object properties
var dogName = myDog.name;
console.log(dogName); //Coder

// bracket notation to access object properties
var dogName = myDog["name"];
console.log(dogName); //Coder

//updating object properties
myDog.name = "Happy Coder";
console.log(myDog.name); //Happy Coder

//adding new properties to an object
myDog.bark = "woof";
console.log(myDog.bark); //woof

//deleting properties from an object
delete myDog.tails;
console.log(myDog.tails); //undefined

//testing
console.log(checkObj(myDog, "name")); //Happy Coder
console.log(checkObj(myDog, "bark")); //woof
console.log(checkObj(myDog, "tails")); //Not Found
console.log(myDog); //prints the whole object
console.log(myDog.name); //accessing object properties using dot notation - Coder
console.log(myDog["name"]); //accessing object properties using bracket notation - Coder

//using objects for lookups ( much faster than switch statements like dictionaries in python)
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val]; //accessing object properties using bracket notation
    return result;
}

console.log(phoneticLookup("charlie")); //Chicago
console.log(phoneticLookup("echo")); //Easy

//checking objects for properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) { //checks if object has the property
        return obj[checkProp]; //accessing object properties using bracket notation
    }
    else {
        return "Not Found";
    }
}
//accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; //accessing nested object properties using dot and bracket notation
console.log(gloveBoxContents); //maps

//accessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
// combining dot notation and bracket notation to access nested array elements
var secondTree = myPlants[1].list[1]; //accessing nested array elements using dot and bracket notation
console.log(secondTree); //pine

//while loops
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray); //[0, 1, 2, 3, 4]

//for loops
var ourArray = [];
for (var i = 0 /*initialisaton*/ ; i < 5;/*condition*/ i++/*iteration*/) {
    ourArray.push(i);
}
console.log(ourArray); //[1, 2, 3, 4, 5]

//iterating through an array with a for loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total); //20

//nested for-loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product); //5040
//while loops - will run the code block while the condition is true (runs only if condition is true) pre-test loop
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(i, myArray); //5 [0, 1, 2, 3, 4]

//do...while loops - will always run the code block atleast once before checking the condition - post-test loop
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i, myArray); //10 [10]

//profile lookup function
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) { //checks if firstName matches
            if (contacts[i].hasOwnProperty(prop)) { //checks if property exists
                return contacts[i][prop]; //returns the property value
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact"; //if no contact found
}

//random fraction
function randomFraction() {
    return Math.random(); //returns a random number between 0 (inclusive) and 1 (exclusive)
}

console.log(randomFraction()); //random number between 0 and 1

//random whole numbers
function randomWholeNum() {
    return Math.floor(Math.random() * 10); //returns a random whole number between 0 and 9
}

console.log(randomWholeNum()); //random whole number between 0 and 9

//random whole numbers within a range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; //returns a random whole number between myMin and myMax (inclusive)
}

var myRandom = randomRange(5, 15);
console.log(myRandom); //random whole number between 5 and 15

//use the parseInt function to convert a string to an integer
function convertToInteger(str) {
    return parseInt(str); //converts string to integer
}

console.log(convertToInteger("56")); //56

//use the parseInt function with a radix
//radix is the base of the numeral system (e.g. base 2 for binary, base 10 for decimal)
function convertToInteger(str) {
    return parseInt(str, 2); //converts binary string to integer
}

//ternary operator is a one line if else statement
function checkEqual(a, b) {
    return a === b ? true : false; //if a is equal to b return true else return false
}

console.log(checkEqual(1, 2)); //false
console.log(checkEqual(2, 2)); //true

//use multiple ternary operators
function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"; //nested ternary operator
}

console.log(checkSign(10)); //positive
console.log(checkSign(-10)); //negative
console.log(checkSign(0)); //zero

//difference between let and var keywords
//let is block scoped (cant let u assign twice) and var is function scoped
function checkScope() {
    let i = "function scope";
    if (true) {
        let i = "block scope"; //different variable than the one outside the block
        console.log("Block scope i is: ", i); //Block scope i is: block scope
    }
    console.log("Function scope i is: ", i); //Function scope i is: function scope
    return i;
}

checkScope();

//mutate an array declared with const keyword
//mutate means to change
const array = [5, 7, 2];    

//prevent object mutation
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS); //prevents modification of existing properties and addition of new properties
    try {
        MATH_CONSTANTS.PI = 99; //will not work
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI); //3.14

//arrow functions - a shorter syntax for writing functions
//usually used when one function is being passed as an argument to another function
const magic = () => {
    return new Date();
};

//default parameters
const increment = (number, value = 1) => number + value; //if value is not provided, it defaults to 1

console.log(increment(5, 2)); //7
console.log(increment(5)); //6

//rest operator (...) allows for function to accept any number of arguments and store them in an array
const sum = (...args) => { //args is an array of all arguments passed to the function
    return args.reduce((a, b) => a + b, 0); //sums all the arguments
};

console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 4)); //10
console.log(sum(1, 2, 3, 4, 5)); //15

//spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; //copies all elements of arr1 into arr2
console.log(arr2); //['JAN', 'FEB', 'MAR', 'APR', 'MAY']

//destructuring assignment - a special syntax for neatly assigning values taken directly from an object
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES; //destructuring assignment
console.log(today); //77
console.log(tomorrow); //80

//destructuring assignment with nested objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST; //destructuring assignment with nested objects
console.log(lowToday); //64
console.log(highToday); //77

//destructuring assignment to assign variables from arrays
let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]; //swaps the values of a and b
})();
console.log(a); //6
console.log(b); //8

//destructuring assignment with rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list; //destructuring assignment with rest operator
    return arr; //returns array without first two elements
}
const arr = removeFirstTwo(source);
console.log(arr); //[3, 4, 5, 6, 7, 8, 9, 10]
console.log(source); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] - source array is not modified

//destructuring assignment to pass an object as a function's parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0; //destructuring assignment to pass an object as a function's parameters
console.log(stats);
console.log(half(stats)); //28.015  

//voxel object
const voxel = { x: 3.6, y: 7.4, z: 6.54 };
const { x: a1, y: b1, z: c1 } = voxel; //destructuring assignment to assign variables from object properties
console.log(a1); //3.6
console.log(b1); //7.4
console.log(c1); //6.54

//template literals - a way to create multi-line strings and perform string interpolation
const person = {
    name: "Anisha",
    age: 18
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);
/*
Hello, my name is Anisha!
I am 18 years old.
*/
//object property shorthand - a way to create objects using variables with the same name as the object properties
const createPerson = (name, age) => ({ name, age }); //object property shorthand
console.log(createPerson("Anisha", 18)); //{ name: 'Anisha', age: 18 }

//concise declarative functions - a way to create functions in objects using a shorter syntax
const bicycle = {
    gear: 2,
    setGear(newGear) { //concise declarative function
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear); //3

//class syntax to define a constructor function - a way to create objects using a class
class SpaceShuttle {
    constructor(targetPlanet) { //constructor method
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter'); //creates a new object using the class
console.log(zeus.targetPlanet); //Jupiter

//getters and setters - a way to define methods that get and set the value of an object property
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() { //getter method
        return (5 / 9) * (this.fahrenheit - 32); //converts fahrenheit to celsius
    }

    set temperature(celsius) { //setter method
        this.fahrenheit = (celsius * 9.0) / 5 + 32; //converts celsius to fahrenheit
    }
}

const thermos = new Thermostat(76); //creates a new object using the class
let temp = thermos.temperature; //gets the temperature in celsius
console.log(temp); //24.44
thermos.temperature = 26; //sets the temperature in celsius
temp = thermos.temperature; //gets the temperature in celsius
console.log(temp); //26
console.log(thermos.fahrenheit); //78.8 - temperature in fahrenheit

//modules - a way to organize code into separate files and import/export functions, objects, or primitives between them

//importing a function
import { add } from './math_functions.js'; //imports the add function from the math_functions.js file
console.log(add(2, 3)); //5

//exporting a default function - a way to export a single value from a module
export default function subtract(x, y) {
    return x - y;
}

//importing a default function
import subtract from './math_functions.js'; //imports the default function from the math_functions.js file
console.log(subtract(7, 4)); //3

//creating a promise - a way to handle asynchronous operations in JavaScript
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data"); //promise is resolved
    } else {
        reject("Data not received"); //promise is rejected
    }
});

//consuming a promise - a way to handle the result of a promise
makeServerRequest.then(result => {
    console.log(result); //We got the data
});

makeServerRequest.catch(error => {
    console.log(error); //Data not received
});
