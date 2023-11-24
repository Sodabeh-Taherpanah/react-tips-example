//
arr=[0,1,2,3,4]
for(let i=0;i<arr.length;i++)
  {
    setTimeout(function()=>{
      console.log(i,arr[i])
    },3000)
    
  }
 //that logs  4 because those loops end sooner than 3000, but we can replace the immediate function to call  function and wait to end 
for(let i=0;i<arr.length;i++)
  {
    (function(closureVal){setTimeout(function()=>{
      console.log(iclosureVal,arr[closureVal])
    },3000)})(i)
    
  }
