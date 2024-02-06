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
