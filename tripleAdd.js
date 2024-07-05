function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}
 
quadrupleAdd(10)(20)(30, 40);


//another example

add=(a)=>(b)=>(c)=> a+b+c
console.log(add(1)(2)(3))
