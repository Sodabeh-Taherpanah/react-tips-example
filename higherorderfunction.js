//A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. 
//useful : when we don't want to use a function again again
//some useful functions   map(), filter() and reduce() ,sort()    : const output = arr.map((num) => num += 10)
const radius = [1, 2, 3];

// logic to clculate area
const area = function(radius){
    return Math.PI * radius * radius;
}

// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}

// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
