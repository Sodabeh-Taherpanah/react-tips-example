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
They can also provide a normal experience on devices that don't support service workers. Apps like this are sometimes called Progressive Web Apps (PWAs). 

some of the features of service workers:

    Letting the user keep using the app (or at least parts of it) when they're no longer connected to the internet.
    Service workers achieve this by serving cached assets in response to requests.
    In Chromium-based browsers, a service worker is one of the requirements for a web app to be installable.
    Service workers are necessary for your web application to be able to implement push notifications.
