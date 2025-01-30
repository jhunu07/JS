const user = {
    username:"abcd",
    id:55,
    welcome:function(){
   // console.log(`${this.username} is my name`);
    }  
}
user.welcome()
// ARROW FUNCTION

// with Parammerter
var fun=(a,b,c)=>{
//console.log(a+" "+b+" "+c);

}
fun(12,43,23)

var show=(a,b=80)=>{
    //console.log(a+" "+b);   
}
show( "mango ","apple")

// without parenthese
var car=x=>{
    //console.log(x);    
}
car("maruti")
// Arrow function
var show = value => value/2;  
//console.log(show(100)); 
// Normal function
function myfun(value){
return value/2
}
//console.log(myfun(1000));
 
// IIFE  IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function (){
    console.log("connected");

})();

// by arrow function
( (a,b,c)=>{
    console.log(a*b*c);

})(2,3,4)


