const arr=[1,2,3,4]
function myprom(num){
  return new  Promise=((resolve)=>{
    setTimeout=()=>{
      resolve('num', ${num})
    },1000)
  }
}

arr.reduce((acc,curr)=>{
  return new  Promise=((resolve)=>{
   resolve(acc.then(()=>  myprom(curr))) 
  }
})
