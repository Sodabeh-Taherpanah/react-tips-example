const array1=[1,2,[3,4],[[5]]];
array1.flat(2);  
//result: [1,2,3,4,5]    second layer flat array

array1.flat().flatMap(e=>e+2)     
//result: [3, 4, 5, 6, '52']


const arr2=[["tom",2],["goal","go to germany"],["age",23]]
Object.fromEntries(arr2)
//result:    {tom: 2, goal: 'go to germany', age: 23}    create a object from array
const obj2=Object.fromEntries(arr2)
Object.entries(obj2)
[['tom', 2], ['goal', 'go to germany'],['age', 23]]  

for(item of arr2)    //iterating   for arrays
{
console.log(item)
}

for(item of 'hello sudy')    //iterating  for strings 
{
console.log(item)
}

const arr=[1,2,9]
arr.at(0)   //1
arr.at(1) //2
arr.at(-2)  // 2

arr.findLast  & findLastIndex & toSpliced  & with  are very useful
toreverserd && toSorted also keep original array 
