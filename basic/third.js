function numgen(){
   let no =Math.floor((Math.random () * 10000))
   return no;
}
 console.log(numgen())

// ###  by arrow function
 let fun=()=>{
    let randomno =Math.floor((Math.random () * 10000))
    return `Number is ${randomno}`;
 } 
 console.log(fun())