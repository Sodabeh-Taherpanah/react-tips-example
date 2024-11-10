In TypeScript, the getters and setters are two terms that can be used to get and set the value of the class members, respectively. However, users can access the public members of the class directly via the dot operator by taking the object of the particular class as a reference.


examples:
**Gerneric
type birthDateType= Date | string    // put them to a type named type aliese, here we have union too 
enums statusType{
active,
Deactive
}   
alternative of enum is union :
type statusT=
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
here we got an error, property id is not on Type T, so we convert function definition to  ---> getId<T extend {id:number }>(items:T[]):number....


**keyof**
type contactFiled=keyof ContactType;
function getValue<T,U extends keyof T>(source:T,propertyName:U){
return source(propertyName)
}
const val=getValue({min:123, name:"city"},"name").  ==> second arg can me name or min , 


**typeof**
when there is no info about  a value, object.. especially in dynamic code
const objA={min:5,max:598}
function save(val:typeof objA){
}
 or fetch ,...
function funcB(val:string | contactType):contactType{
 if (typeof val==="object")
 {
 }
 else{
   return{ id:0,name: val,status:"active"}
}

}


interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}
  //index access types
type Awesome = Contact["address"]["postalCode"]
