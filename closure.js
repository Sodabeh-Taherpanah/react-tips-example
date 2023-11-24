//combinations of lexical scope and functions 
//let access to a variable from a function that is enclosing scope   even that leaves the scope that it was declear

// memory efficient

dutyWithoutClosure(index){
  const value= new Array(10000).fill('hi');
  console.log('created value')
  return value[index]
}

dutyWithClosure(index){
  const value= new Array(10000).fill('hi');
  console.log('created value again')
  function (index)
  { 
    return value[index]
  }
 
}

dutyWithoutClosure(120)
dutyWithoutClosure(600)
//doesn't create an array value twice
const callFunc=dutyWithClosure()
callFunc(8000)
callFunc(20)

