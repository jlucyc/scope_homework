//named function declaration

function sayHello(name = 'Jen') {           
    return `Hello ${name}!`;
}

console.log(sayHello("Ally"));

//Anonymous function expressions

var add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

console.log('1+3 with add:', add(1,3));



// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.



function sumNumbers(numbers) {
    var sum = 0;
    for (var number of numbers) {
        sum = sum + number;
        // console.log(sum);
        // console.log(number);
    }
    return sum;
}
numbers =[1,2,3]
console.log(sumNumbers(numbers))

// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object
// does not have a key that matches the string.
// Store this function in an appropriately named variable to invoke it

var person = { name: 'Wojtek', age: 30 };

var objectHasKey = function (object, searchString) {
    for (var key in object){                //use 'in' when looping though objects
        if (searchString === key) {
            return true;

        }
    }
    return false;
}
console.log(objectHasKey(person, 'name'));
console.log(objectHasKey(person, 'height'));

//arrow functions () => {}

var multiply = (firstNumber, secondNumber) => firstNumber*secondNumber;

console.log('multiply 2 by 5:', multiply(2,5));





