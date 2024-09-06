  falsy values  :  const falsyValues = ['', 0, null, undefined, NaN, false];     //become false while converting to Boolean are called falsy values. 
  Hoisting is the default behavior of JavaScript where all the variable and function declarations are moved on top. 
console.log(![], [] == ![] and [] === ![]);    // false true  false. -> [] retrun truthy
console.log(null == undefined ,null === undefined )   // null is falsy ,   true, false
console.log( typeof null === 'object', typeof undefined === 'undefined', null instanceof Object,NaN instanceof Number); 
//true true false false

console.log(typeof new String("str") === typeof String("str"));   // String("str") returns a string "str" but new String("str") returns an object.
console.log(['a']+['b'],[1, 2, 3]+[4, 5, 6]);   // you must know the "+" operator turns the array into a string. 
console.log([1, 3, 4, 2]["sort"](),[1, 3, 4, 2]["sort"]());   //   [1, 2, 3, 4].   , first one convert it to constructor of function
int number;//Here, a number has an undefined value.   but     String str=null;//Here, str has a null value.  
Write an example of a pure and impure function to add a value to an array . how a value insertion in an array impacts the purity of a function.
// Impure Example

let arr = [];
const impureAddition = (num) => arr.push(num);
impureAddition(10);

// Pure Example

const pureAddition = (num) => (newArr) => [...newArr, num];
pureAddition(10)([]);

typeof true;  // "boolean"  typeof undefined;  // Returns: "undefined"   typeof [1, 2, 3];  // Returns: "object"   typeof undeclaredVariable; // Returns: "undefined" 


isNaN("Hello")  //  true.    isNaN(undefined) //  true
isNaN(345)   //  false
isNaN('1')  //  false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) //  false, since true converted to Number type results in 1 ( a number)
isNaN(false) //  false


//this problem
 for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }

// output
6
6
6
use let instead var ,var is globally scoped but let is locally scoped. So for let a new i is created for every iteration.

The Null-Coalescing operator (??), provides a default value if the evaluated value is either undefined or null

var foo = { n: 1 }
var bar = foo
foo.x = foo = { n: 2 }   
console.log(foo).    //{n:2}
console.log(bar)   // {n:1,x:{n:2}}

