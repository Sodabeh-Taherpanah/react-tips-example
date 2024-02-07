data=[["age",22],["color","pink"]

Object.fromentries(data)

      
arr=[10,34,78,0,98765]

arr.at(-2)  // 0


arr2=[{age:44,name:"asal"},{age:12,name:"karlos"},{age:55,name:"mary"}]

arr2.findLast(e=>e.age>30). //{age:55,name:"mary"}

 arr2.findLastIndex(e=>e.age>30). //2

      arr2.toReversed() or arr2.toSorted(). or toSpliced //keep the original list 
      arr2.toReverse()  or toSort , toSplice //change original list

arr3=["jjol","rrrt"]   arr3.with(1,"hey")   //keep original list 
arr3[1]="hey".   //change the original list
