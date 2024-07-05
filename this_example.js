var na="ad sfff"
var obj={
    na:"ee wwww",
    props:{
        gF:function (){
        return this.na
            
        },
         na:"bob hu",
    },
    gh:function (){
         return this.na
    },
    gv:()=>{
        return this
    },
    gc:(function (){
         return na
    })()
    
    
};

console.log(obj.props.gF())
console.log(obj.gh())
console.log(obj.gv())
console.log(obj.gc)
