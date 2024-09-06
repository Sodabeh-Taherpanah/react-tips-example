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

## This is a h2 header
###### This is a h6 header

**What Are Web Workers?** 

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

In JavaScript, we need closures when a variable which is defined outside the scope in reference is accessed from some inner scope.

**Creating Objects in JavaScript**

    By object literal : object={property1:value1,property2:value2.....propertyN:valueN}
    By creating instance of Object directly (using new keyword) : var objectname=new Object(); 
    By using an object constructor (using new keyword) : function emp(id,name,salary){  this.id=id;  }     e=new emp(103);

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
** RegExp object**
**JSON.stringify()**
