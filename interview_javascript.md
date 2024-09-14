_JavaScript is a client-side scripting language, and it doesn't fully support the OOPS concept.
-It resides inside the HTML documents and is used to make web pages interactive (not achievable with simple HTML).
_JavaScript code can run only in the browser, but it can now run on the server via Node.js.
_The JavaScript code doesn't require to be complied.
_JavaScript code is used in HTML web pages and requires less memory.
_JavaScript uses an event-based approach to concurrency.
_JavaScript doesn't support multithreading.

**) What is BOM?**
BOM stands for Browser Object Model. It provides interaction with the browser. The default object of a browser is a window. It is a browser object, not an object of JavaScript.
The window object provides various properties like document, history, screen, navigator, location, innerHeight, innerWidth,

**DOM**
DOM stands for Document Object Model. A document object represents the HTML document. It can be used to access and change the content of HTML

**What is the use of history object?**

The history object of a browser can be used to switch to history pages such as back and forward from the current page or another page. history.back() history.forward() history.go(number)

**What are the different data types present in JavaScript?**

    Primitive data types  : String ,Number Boolean,BigInt,Undefined,null,Symbol,typeof
    Non- Primitive data types :Object,Array
Symbol,It is used to store an anonymous and unique value.


###### This is a h6 header

## **What Are Web Workers?** 

Traditionally, JavaScript is a single-threaded language. For example, 
if you have code trying to animate a DOM element, when you trying to change a variable have to wait for the animation to end.

Web workers are JavaScript files that execute in a separate thread with no direct access to the DOM.
Because that takes a lot of time to run, so you give them to the browser to execute in the background without affecting the JavaScript which is responsible for your web page. 


**What Are Service Workers?**

Service workers are a specialized type of JavaScript web workers. A service worker is a JavaScript file that functions a bit like a proxy server. It catches outgoing network requests from your application, letting you create custom responses. 
Service workers allow you to add features that are characteristic of native apps to your web application.
Apps like this are sometimes called Progressive Web Apps (PWAs). 

some of the features of service workers:

    Letting the user keep using the app (or at least parts of it) when they're no longer connected to the internet by serving cached assets in response to requests.
   
    In browsers, a service worker is one of the requirements for a web app to be installable.
    for push notifications.

**A Progressive Web App**
(PWA) is a web application that provides an app-like experience by leveraging modern web technologies, enabling features like offline functionality, push notifications, and device hardware access. PWAs are reliable, fast, and engaging, and can be installed on a user's home screen, functioning like native apps.

**closure**

In JavaScript, we need closures when a variable defined outside the scope in reference is accessed from some inner scope.

**Creating Objects in JavaScript**

    By object literal : object={property1:value1,property2:value2.....propertyN:valueN}
    By creating an instance of Object directly (using the new keyword) : var objectname=new Object(); 
    By using an object constructor (using the new keyword): function emp(id, name,salary){  this.id=id;  }     e=new emp(103);

    How to create an array in JavaScript?

**create an array in JavaScript.** 

    By array literal
    By creating an instance of Array
    By using an Array constructor

 Difference between Client side JavaScript and Server side JavaScript?

Client-side JavaScript comprises the basic language and predefined objects which are relevant to running JavaScript in a browser. The client-side JavaScript is embedded directly by in the HTML pages. The browser interprets this script at runtime.

Server-side JavaScript also resembles client-side JavaScript. It has a relevant JavaScript which is to run in a server. The server-side JavaScript are deployed only after compilation.

** This **
The this keyword is a reference variable that refers to the current object.
** debugger keyword**
JavaScript debugger keyword sets the breakpoint through the code itself. 
**Number object**
var n=new Number(16);//integer value by number object   //can be an integer value  or exponent value, output: 130000 or floating point value
**set**  Set object is used to store the elements with unique values //var set = new Set();    set.add("jQuery");  
**Map** Map object is used to map keys to values. It stores each element as key-value pair.  //var map=new Map();    map.set(1,"jQuery");   

**preventDefault **  event.preventDefault(): Stops the default action associated with the event.such as stopping a form submission, preventing a link from navigating, or stopping a button from submitting a form.

**stopPropagation **  event.stopPropagation(): Prevents the event from bubbling up to parent elements or capturing down.Use Case: If you want to prevent an event from being handled by parent elements in the event bubbling or capturing phase.

** RegExp object**
**JSON.stringify()**

**Hoisting**
Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

*Variable initializations are not hoisted, only variable declarations are hoisted:
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

To avoid hoisting, you can run javascript in strict mode by using “use strict”



*pure functions**
Pure functions are functions that accept an input and returns a value without modifying any data outside its scope(Side Effects).
Benefits of Pure Functions:

    Easier to test: 
    Predictability: the function's behavior is predictable and doesn't affect the external environment.
    Reusability: They can be reused in different contexts.
    same as redux reducer.
    
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Always returns 5 ,This function is pure because it doesn't depend on or modify anything outside of it, and it consistently returns the same result for the same inputs.

let count = 0;

function increment() {
  count++;
  return count;
}
console.log(increment()); // Impure, modifies external 'count'

function impure(arg) {
  let f = finalR.s _ arg
} //this  isn’t a pure function because it didn’t return a value
function impure(arg) {
  return finalR.s _ 3
}//is impure, though it didn’t affect any external state, its output return finalR.s _ 3 isn't dependent on the input arg.


**IIFE**

An Immediately Invoked Function  is a function that runs as soon as it is defined.
(function (){
  //Do something;
})();  
While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name. To remove this error, we add the first set of parenthesis that tells the compiler that the function is not a function declaration, instead, it’s a function expression.

The second set of parenthesis: () at the end, From the definition of an IIFE, we know that our code should run as soon as it is defined. A function runs only when it is invoked. If we do not invoke the function, the function declaration is returned


** Let or var **
let: Block-scoped, only accessible within the block where it's declared, and does not allow re-declaration in the same scope.
var: Function-scoped, accessible throughout the function or global scope, and allows re-declaration within the same scope.
let and const are not global scope. but var is. all of them are Function-scoped.

** this**
 this refers to the context in which a function is called. 
console.log(this); // In a browser, logs the window object

const obj = {
  name: 'Alice',
  getName: function() {
    return this.name; // 'this' refers to 'obj'
  }
};
console.log(obj.getName()); // "Alice"

function Person(name) {
  this.name = name; // 'this' refers to the new instance of Person
}
const person = new Person('Bob');
console.log(person.name); // "Bob"


const obj = {
  name: 'Alice',
  getName: () => {
    return this.name; // 'this' refers to the global object, not 'obj'
  }
};
console.log(obj.getName()); // undefined (or global object property in non-strict mode)
In arrow functions, this is lexically bound, meaning it inherits this from the surrounding scope (where the arrow function is defined),

*call,apply,bind  **

They are commonly used to borrow methods from one object for another or to invoke a function with a specific context.
const person = {
  name: 'Alice',
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
};

const anotherPerson = { name: 'Bob' };

person.greet.call(anotherPerson, 'Hello'); // "Hello, my name is Bob"

apply: Similar to call(), but takes the arguments as an array instead of individual values.

const person = {
  name: 'Alice',
  greet: function(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  }
};

const anotherPerson = { name: 'Bob' };

person.greet.apply(anotherPerson, ['Hi', '!']); // "Hi, my name is Bob!"


bind: Returns a new function where this is permanently bound to the provided value. It does not immediately invoke the function but creates a new one with the set this value.

const person = {
  name: 'Alice',
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
};

const anotherPerson = { name: 'Bob' };

const greetBob = person.greet.bind(anotherPerson);
greetBob('Hey'); // "Hey, my name is Bob"


**scopes**

    Global Scope
    Local or Function Scope : Any variables or functions declared inside a function have local/function scope, 
   
    function awesomeFunction(){
  var a = 2;

  var multiplyBy2 = function(){
    console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
  }
}
console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

    Block Scope
{
  let x = 45;
}

console.log(x); // Gives reference error since x cannot be accessed outside of the block
Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope.
for(let i=0; i<2; i++){
  // do something
}

console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block

Scope Chain: The JavaScript engine also uses Scope to find variables. 
var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();

** Currying **

Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 


** Constructor functions  **
they are used to create objects in JavaScript.
function Person(name,age,gender){
  this.name = name;
}

var person1 = new Person("Vivek");
console.log(person1);

var person2 = new Person("Courtney");
console.log(person2);

**arrow or function **** 
The arrow doesn’t need to use the return keyword as well.
Also, for functions having just one line of code, curly braces { } can be omitted.
var obj1 = {
  valueOfThis: function(){
    return this;
  }
}
var obj2 = {
  valueOfThis: ()=>{
    return this;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object, there is no binding of this keyword. This keyword inside an arrow function does not refer to the object calling it. It rather inherits its value from the parent scope which is the window object in this case. Therefore, in the code above, obj2.valueOfThis() returns the window object.


**protoType**

prototype is an object that is associated with every function and object. It allows objects to **inherit** properties and methods from another object.
Prototypes enable JavaScript objects to share methods and properties, allowing for inheritance and efficient memory usage.
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // "Hello, my name is Alice"


**generator**
generator functions are a special class of functions.They can be stopped midway and then continue from where they had stopped.but In normal functions, we use the return keyword to return a value and as soon as the return statement gets executed, the function execution stops. In the case of generator functions, when called, they do not execute the code, instead, they return a generator object.
next(), this method when called, executes the code until the nearest yield statement, and returns the yield value.
function* genFunc(){
  yield 3;
  yield 4;
}
genFunc(); // Returns Object [Generator] {}

genFunc().next(); // Returns {value: 3, done:false}


**Difference between Async/Await and Generators usage **


    Generator functions are run by their generator yield by yield which means one output at a time, whereas Async-await functions are executed sequentially one after another.
    Async/await provides a certain use case for Generators that are easier to execute.
    The output result of the Generator function is always value: X, done: Boolean, but the return value of the Async function is always an assurance or throws an error.

**promise**
promises are used to handle asynchronous operations like server requests
then () method is used to access the result when the promise is fulfilled.
catch() method is used to access the result/error when the promise is rejected.
One of the advantages of promises is that they are a much cleaner syntax. Before we had promises, we could easily get stuck in callback hell 🌋
Promise object has four states -

    Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.
    Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
    Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
    Settled - This state represents that the promise has been either rejected or fulfilled.

**storage***

sessionStorage: You lose your data when your session is over, like when you close the browser on the tab.
localStorage: Data persists even after closing your session

![Uploading storage.jpg…]()

**pure component**
the pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized React.memo() API 


** arrow function** 
Use to keep the context of this .No this Binding: Arrow functions do not have their own this context. Instead, they inherit the this value from their surrounding lexical scope. This makes arrow functions particularly useful in situations like callback functions or within object methods where the traditional function may not have access to the desired this value.

**Compound Component** :
when some components need to share state and the child components are requires to be inside the scope of parent for example dropdown.

Render props:That solve logic repetition problem with share function between components using a prop. Then parent and children share some state and logic together. 

