"use strict";


// let a=10
// let b=20
// let c=30;

// [a,b,c]=[b,c,a]

// console.log(a,b,c);

// let a=10
// let b="Orxan";
// a=b
// console.log(a);


// let a=5;

// function test(a){ //parametr
//     return `Salam ${a}`
// }
// console.log(test("Ferid")); //argument


// let children="Erfan"

// function test(children){
//     return `Salam ${children}`
// }
// console.log(test("Orxan"));



// function greet(age=19,name){
//     return `Salam ${name} senin ${age} yasin var`
// }

// console.log(greet(undefined,"Orxan"));



// Bir kitabin ve bir defterin birlikde qiymeti 18 manatdir.
// Kitab defterden 10 manat bahadir. Kitab nece manatdir ?

// -----------------------------------------------

//ata ile ogulun yaslarinin cemi 70-dir 
// 5 il evvel atanin yasi oglunun yasinin 5 qati idi 
// Atanin indiki yasi necedir ?

// Function homework

// function test(firstName){
//     return  `Salam ${firstName}`
// }

// console.log(test("Orxan"));

// function test(eded){
//     if(typeof(eded)==="number"){
//         if(eded%2==0){
//             return true
//         }
//         else{
//             return false
//         }
//     }
//     else{
//         console.log("Zehmet olmasa reqem daxil ");
        
//     }
// }


// console.log(test(4));



// const createInfo=function(name,heigth,phone,hobbies){
//     return {
//         name:name,
//         heigth:heigth,
//         phone:{
//             model:phone.version,
//             year:phone.year
//         },
//         hobbies:hobbies
//     }
// }


// console.log(createInfo("Orxan",184,{model:"Apple",version:"17pro",year:2025},["swimming","gym","golf"]));



// const myFunction=(a)=>a**3

// console.log(myFunction(10));


// function tempuratur(farenheyt){
//     let selsi=100-(farenheyt-32)/1.8
//     return selsi

// }


// function temp(qaynama_tempuraturu){
//     return tempuratur(qaynama_tempuraturu)
// }
// console.log(temp(4));

// console.log(tempuratur(2));




// function reverse(numb){
//     let result=""
//      for(let i=String(numb).length-1;i>=0;i--){
//         result+=String(numb)[i];
//      }
//      return Number(result);
// }
// console.log(reverse(123));


// let myLIst=['cup', 'plate', 'spoon', 'knife', 'fork']

// for (const element of myLIst) {
//     console.log(element);
    
    
// }

// let vegetables=['pomidor', 'sogan', 'yerkoku', 'Sarimsaq', 'semeni']

// for (const i of vegetables) {
//     if(i[0].toLowerCase()==="s"){
//         console.log(i);
        
//     }
    
// }

// let total=0

// for(let i=0;i<101;i+=1){
//     total+=i
// }

// console.log(total);


// const myArr=['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']

// for (const i of myArr) {
//     if(i.length!=5){
//         continue
//     }
//     console.log(i[i.length-1]);
    
    
// }

// for (let i = 100_000; i > 0; i--) {
//     if (i % 9999 === 0) {
//         console.log(i);
//         break;
//     }
// }


// let sentence='Men her gun Javascript oyrenirem'

// let total=""

// const saitler="aıoueəiöü"

// for (const i of sentence) {
//     if(!saitler.includes(i)){
//         total+=i
//     }
    
// }

// console.log(total);


    // const letterList = ['a', 'a', 'b', 'a', 'c', 'b', 'b', 'e']
    // const letterCount = {a: 0, b: 0, c: 0, e: 0}

    // for (const el of letterList) {
    //     letterCount[el]++
        
    // }
    // console.log(letterCount);
    