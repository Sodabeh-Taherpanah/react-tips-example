obj={
  "user1":"ali",
  "user2":"mina"
}
object.keys(obj).forEach(e=>{
  console.log(key,obj(key))   ->>  user1  , ali   
                                  user2 , mina
})

object.values(obj).forEach(e=>{
  console.log(e)   ->>   ali   
                        mina
})

object.entries(obj).forEach(e=>{
  console.log(e)   ->>         [user1,ali]
                               [user2 ,mina]
})


object.entries(obj).map(e=>{
  return   e[1]+e[0].replace('user1',"me');   [alime, mina]   
})

for(item in obj)   // enumerating  for objects
  {
    console.log(item)
  }
const obj2={user:{age:23,height:160}} 
obj2?.user?.age  ? is optional chaining operator

nullish coalescing operator ??    
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, 
const foo = null ?? 'default string';
console.log(foo);   //'default string'
const baz = 0 ?? 42;
console.log(baz);  //  0
