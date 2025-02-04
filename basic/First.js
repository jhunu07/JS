//console.log("hii");
 const a=12
 const b =11
if (a>b) {
   // console.log("a");
    
} else {
    //console.log("b")
}
for (let i = 0; i <=6; i++) {
   //console.log("hiiii");
}

 let ab =24
 let bc =30
if (ab<bc) {
   // console.log("hiiii");
     
}

// let no = 0;
// while (no<=30) {
//     //console.log(`valuse is ${no}`);
//   no = no*2

    
// }
let score  = 1
do {
   // console.log(`NO IS ${score*5}`);
    score++
} while (score <=10);


const string = "abcde fghi"
for (const element of string) {
    if (element === " ") {
        //console.log("whitespce is there");
       continue
    }
   // console.log(`char is ${element}`)  
}

let array = [12,"ab","arf","jhu"]
for (const i of array) {
    
    
   // console.log(`${i}`);
    
    
}
// const muobj={
//    game:"car",
//    carmodel:'ford',
// };
/// ###################  MAP  ###############
let map = new Map();
map.set('name',"abc")
map.set('roll',12)
map.set('lab',"a")
map.set('sub',"phy")
//console.log(map);
for (let [key,val] of map) {
   //console.log(key,':',val);
   
}

// for object 

const muobj={
      game:"car",
      carmodel:'ford',
   };
   for (const key in muobj) {
     // console.log(`${key} is ${muobj[key]}`); 
   }
   //console.log(muobj);

   let arra = [12,23,442,4,34,5,4654]
   for (let i = 0; i < arra.length; i++) {
      const element = arra[i];
     // console.log(i);
      
   // console.log(`value at index ${i} is ${element}`);
   }
  arra.forEach(  (item,index)=> {
  // console.log(` value at index ${index} is ${item}`);
item++;
console.log(item);


   
   
  })
   
   for (const key in arra) {
     //console.log(arra[key]); 
    // console.log(`value at index ${key} is ${arra[key]}`);
    }
   //console.log("new aray");
   
    for (const [key,value] of arra.entries()) {
     // console.log(`value at index ${key} is ${key,value}`);

      
    }
    arra.forEach(element => {
      //console.log(`Value is ${element}`);
      
      
    });
