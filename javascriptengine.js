javascript is single thread language with one call stack  so for non blocking tasks we can use asyncronus callback functions


console.log('1')
settimeout(()=>{console.log('1')},1000);
console.log('3')

console.log('1')  goes to call stack then run then remove from call stack   then
settimeout... goes to call stack  so "settimeout" is part of web APi so triggers that and "settimeout" goes from call stack to web apI location 
web APi set delays and after delay "settimeout" run & for calling callback function  goes to "callback queue"  
Now "Event Loop"  check if "call stack " is empty and we have something in "callback queue"  put that in "call stack" to run 


another async function is event listner for click or ... and callback functions will run at  event occures
another async is httprequests .. 
