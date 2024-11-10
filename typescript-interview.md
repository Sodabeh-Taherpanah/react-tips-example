In TypeScript, the getters and setters are two terms that can be used to get and set the value of the class members, respectively. However, users can access the public members of the class directly via the dot operator by taking the object of the particular class as a reference.


examples:
**Gerneric
type birthDateType= Date | string    // put them to a type named type aliese, here we have union too 
enums statusType{
active,
Deactive
}   
alternative of enum is union :
enums statusT{
"active" | 
"Deactive"
}  

interface ContactType{
name: string;
id: number;
status: statusType
birthDate?: birthDateType
}

interface ContactUserType<productIdType>{
name:string;
id:number;
mail:string;
productId:productIdType;
}   //or extends ContactType 

const aVar:{name:"reza",id:1003,status:statusType.active}
function clone<T1,T2 extend T1>(dataSource:T1):T2{
return Object.apply({},dataSource);
}
const BResult=clone<ContactType,ContactUserType>(a)



tips: 
function getId<T>(items:T[]):number{
  return items.reduces((max,e)=>e.id > max ? max: e.id+0)+1
}
here we got an error , property id is not on Type T, so we convert function definition to  ---> getId<T extend {id:number }>(items:T[]):number....



