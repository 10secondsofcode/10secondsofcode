# Chapter 1

#Javascripts:

var -   The scope of a variable declared with the keyword var is its current execution context. 
Let -   let are block scoped and not function scoped.

#Hoisting functions

Function declarations

hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};

Function expressions

Function expressions, however are not hoisted.

expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log('Will this work?');
};


https://scotch.io/tutorials/understanding-hoisting-in-javascript

async / await
promises
callbacks

#Async/await

Async/await is a new way to write asynchronous code. Previous options for asynchronous code are callbacks and promises.
Async/await is actually built on top of promises. It cannot be used with plain callbacks or node callbacks.
Async/await is, like promises, non blocking.
Async/await makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.

const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest()

const makeRequest = async () => {
  console.log(await getJSON())
  return "done"
}

makeRequest()

#closures

A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: 
    - it has access to its own scope (variables defined between its curly brackets).
    - it has access to the outer function’s variables.
    - it has access to the global variables.

Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.

Inner function can access variables and parameters of an outer function.
It is useful in hiding implementation detail in JavaScript.

function showName (firstName, lastName) {
var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
function makeFullName () {       
return nameIntro + firstName + " " + lastName;   
}

return makeFullName ();
}

showName ("Michael", "Jackson"); // Your name is Michael Jackson

function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        alert(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100


function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3
alert(counter()); // 4

In the above example, return InnerFunction; returns InnerFunction from OuterFunction when you call OuterFunction(). A variable innerFunc reference the InnerFunction() only, not the OuterFunction(). So now, when you call innerFunc(), it can still access outerVariable which is declared in OuterFunction(). This is called Closure.

#IIFE

IIFE is a function expression that automatically invokes after completion of the definition.
The parenthesis () plays important role in IIFE pattern.
use () operator to call this anonymous function immediately after completion of its definition.
(function () {
    //write your js code here
})();

Adcvantages:

Do not create unnecessary global variables and functions
Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
Organize JavaScript code.
Make JavaScript code maintainable.

#this():

The following four rules applies to this in order to know which object is referred by this keyword.

Global Scope
Object's Method
call() or apply() method
bind() method
