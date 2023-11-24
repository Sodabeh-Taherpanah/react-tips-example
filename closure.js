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
// dosen't create array value twice
const callFunc=dutyWithClosure()
callFunc(8000)
callFunc(20)

