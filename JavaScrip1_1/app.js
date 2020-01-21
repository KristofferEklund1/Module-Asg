/*Question 1 
Declare and initialise a variable with a string value.*/


var strimpels = "string";

console.log (strimpels);

/*Question 2
Create an object variable called person and give it two properties (a key and a value) of your choice.*/

var person={
    name : "Kristoffer",
    age : "20",
};

console.log (person);

/* Question 3
Create a variable called outOfStock and assign it a boolean value.

Create an if else statement that checks the value of outOfStock.

If it is true, console log "Out of stock". Otherwise log "In stock".*/

var outOfStock = "false";

if (outOfStock === true){
    console.log ("Out Of Stock")
} 

else{
    console.log("Out of stock")
}

/* Question 4
Create an array of five numbers.
Loop through the array and console log each value.*/

var numbers = [1,2,3,4,5,];
for (var i=0; i <=numbers, length; i++){
    console.log(numbers[i]);
}

/* Question 5
Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.*/
for (i = 15; i < 26; i++) {
    console.log(i)

}



/* Question 6
Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.*/
for (var i = 15; i <= 25; i++) {
    if(i === 20){
        console.log("Number is", i);
    }
}

/*Question 7
Create an array of two objects. Each object must have the same three properties (with different values):

one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value.*/

var person=[{
    name : "Kristoffer",
    age : "20",
    isAlive : true,
},

{
    name : "Kriss",
    age : "23",
    isAlive : false,
}
];

for(var i =0; i <person.length; i ++) {
    console.log(person[i].age)
    console.log(person[i].isAlive)
}



/*Question 8
Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.

Inside the function, log the string "I don't like " together with the argument.

Call the function and pass in a value of your choice.

Example:
If you pass in the value "giraffes", the function should log: "I don't like giraffes".*/

function whatIDontLike(animal) {
    console.log("I dont like " + animal);

}
whatIDontLike("Snakes");


/*Question 9
Create a function that accepts two arguments.

Inside the function, subtract the second argument from the first and console log the result.*/

function twoArguments (arg1,arg2){
    var arg = arg1 - arg2;
    console.log(arg);
}

twoArguments(10,5);

console.log(twoArguments)


/*Question 10
Create an empty array.

Create a function that accepts one argument.

Inside the function, add the argument to the array.

Call the function and pass in a value of any type.*/

var emtyArray = [];

function oneArg(fruit){
    emtyArray.push("Banana")
}
oneArg();
console.log(emtyArray);


/* Level 2 */

/* Question 1
Using the loop from question 5 above, only log the counter variable if it is an even number.

Hint: you can use the modulus % operator for this.*/

for (var i = 15; i <= 25; i++) {
    if(i === 20){
        console.log("Number is", i);
    }
}


/*Question 2
Create a function that logs the sentence "I am a function".

Assign this function to a variable called innerFunction.

Create another function called outerFunction that accepts one argument.

Inside outerFunction, call the argument like you would a function - with parenthesis ().

Call outerFunction and pass in the innerFunction variable.*/