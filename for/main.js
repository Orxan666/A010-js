"use strict";


// let number=100_000

// while(number>0){
//     if(number%9999==0){
//         console.log(number);
//         break;

//     }
//     number--
// }

// 'Men her gun Javascript oyrenirem' bu stringin saitlər çıxarılmış vəziyyətini konsolda göstərin.

const sentence = "Men her gun Javascript oyrenirem"

let total = ""

// const saitler="aıoueəiöü"

// let i=0

// while(i<sentence.length){
//     if(!saitler.includes(sentence[i])){
//         total+=sentence[i]
//     }
//     i++
// }

// console.log(total);

// let myArr=['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']

// let index=0

// while(index<myArr.length){
//     let element=myArr[index]
//     index++
//     if(element.length!==5){
//         continue

//     }
//     let netice=element[element.length-1]
//     console.log(netice);

// }


// 1-dən 100-ə kimi olan bütün ədədlərin toplamını tapın (1+2+3+...+99+100)
// let number=1
// let sum=0
// while(number<101){
//     sum+=number
//     number++
// }
// console.log(sum);

// a=6
// console.log(a);


// console.log("Orxan"==="orxan" || true==1 );

// console.log(true==0 && true==1);
// console.log(true === false && 1 || 0);
// console.log(true === 1);

// console.log(5=="5" && true && "5"===5 || true);

// && - and operatorunda sol teref false-dursa solu verir sol teref true-dursu 
// sagi verir sag teref true-dursa solu verir sag teref false-dursa sagi verir

// console.log(2==="2" && false==true);
// console.log("0"&&"Eli");


// console.log(null ==true);


// console.log(null == true && 1 && false == 0 || 1);

// console.log(null == true && 1 && false == 0 || null || false || false == 0 && "Orxan" || "Abbas" && "Erfan");

// console.log();


// Istifadəçi bir ədəd girməlidir ancaq bu ədəd 1000 - 100.000 arasında 3-ə bölünən bir ədəd olmalıdır.
//  Həmin şərtlərə uyğun olaraq istifadəçiyə məlumat verin.

// debugger

// const eded=Number(prompt("Eded daxil edin"))

// if(eded>1000 && eded<100_000 ){
//     // alert(eded)
//     if(eded%3==0){
//         alert(eded);

//     }
//     else{
//         alert("Eded 3-e bolunmur")
//     }
// }
// else{
//     alert("Eded 1000 - 100_000 arasinda olmalidir")
// }

// const user = {
//     name: 'Elnur',
//     height: 179,
//     phone: {
//         marka: 'Iphone',
//     },
//     orders: ['book', 'mouse', 'mousepad']
// }

// user.height+=1
// user.phone.marka="Samsung"
// user.phone.model="S22"
// delete user.name
// delete user.orders[0]
// user.orders.unshift("ball")
// user.orders.push("etir")


// console.log(user);







// Istifadəçi bir ədəd girməlidir ancaq bu ədəd 1000 - 100.000 arasında
//  3-ə bölünən bir ədəd olmalıdır. Həmin şərtlərə uyğun olaraq
//   istifadəçiyə məlumat verin.

// -----------------------------------------
// While HomeWork
// let myList=['cup', 'plate', 'spoon', 'knife', 'fork']
// let i=0
// while(i<myList.length){
//     console.log(myList[i]);
//     i+=2
// }
// ['xiyar', 'pomidor', 'sogan', 'yerkoku', 'Sarimsaq', 'semeni'] bu array içərisində 
// “s” hərfiylə başlayan elementləri dinamik şəkildə konsolda göstərin

// let arr=['xiyar', 'pomidor', 'sogan', 'yerkoku', 'Sarimsaq', 'semeni'] 
// let a=0
// while(a<arr.length){
//     if(arr[a][0].toLowerCase()==="s"){
//         console.log(arr[a]);

//     }
//     a++
// }

// ---------------------------------------

// FOR , FOR-IN , FOR-OF

// let myArr=[1,2,3,true,null,"Orxan"]



// let i=0

// while(i<myArr.length){
//     console.log(myArr[i]);
//     i+=1
// }

// for(let i=0;i<myArr.length;i+=2){
//     console.log(myArr[i]);
// }


// for(let j=0;j<students.length;j+=1){
//     // console.log(students[j]);
//     if(students[j][0]==="S"){
//         console.log(students[j]);

//     }
// }


// debugger
// let dorde_bolunenler=[]
// for(let i=1;i<100;i++){
//     if(i%2==0){
//         if(i%4==0){
//             dorde_bolunenler.push(i)       

//         }

//     }
// }
// console.log(dorde_bolunenler);



// for - iterasiyalarda istifade olunur

// let students = ["Vefa", "Abbas", "Sevda", "Erfan", "Nermin", "Ferid"]
// for (const deyer of students){
//     console.log(deyer);
    
// }


// let developer={
//     firstName:"Sevda",
//     lastName:"Eliyeva",
//     age:18
// }

// let students = ["Vefa", "Abbas", "Sevda", "Erfan", "Nermin", "Ferid"]


// for(let i in students){
//     console.log(students[i]);
    
// }

// Popup boxes

// confirm("Bildirisleri ac")
// alert("Salam")
// let firstName=prompt("Adinizi daxil edin")
// let result=alert(`${firstName} Xos geldiniz`)

// function greet(){
//    return "Salam xos geldin"
// }

// console.log(greet());

// function topla(){
//    return 2+2
// }

// console.log(topla());

// const eded1=Number(prompt("1-ci ededi daxil edin"))
// const eded2=Number(prompt("2-ci ededi daxil edin"))

// function topla(a,b){ //parametr
//     return a+b
// }

// alert(topla(eded1,eded2)) //argument


// function salamla(ad,soyad){ //parametr
//     return `Salam xos geldiniz ${ad} ${soyad}`
// }

// const firstName=prompt("Adinizi daxil edin: ")
// const lastName=prompt("Soyadinizi daxil edin: ")

// alert(salamla(firstName,lastName)) //argument

// bir funksiya teyin edin funksiya 2 parametr qebul etsin 
// hemin deyerlerin toplaminin cut veya tek oldugunu console-da dinamik halda gosterin

// function mustang(reqem1,reqem2){
//     const netice=reqem1+reqem2
//     if(netice%2==0){
//         return "Cutdur"
//     }
//     else{
//         return "Tekdir"
//     }
// }

// alert(mustang(5,2))
// console.log(greet("Abbas"));



// // decleration function
// function greet(firstName){
//     return `Salam ${firstName}`
// }









// expression function

// const greet=firstName=> `Salam ${firstName}`
// console.log(greet("Orxan"));



// var-yeniden teyin etmek olur hemcinin deyerinide deyismek olur
// let yeniden teyin etmek olmur amma deyerini deyismek olur
// const- ne yeniden ne de deyerini deyismek olmur

// Scobe 

// function test(){
//     let a=5
//     return a
// }

// for (let i = 0; i < array.length; i++) {
    
// }


// var -function scope
// let , const block

// if(true){
//     let a=5
// }
// console.log(a);
// console.log(test());

// function test(){
//     let a=4
//     return a
// }










// const  test=()=>{
//     return 5
// }
// console.log(test());


// const a="Nermin"

// console.log(a);




// var a=1
// var b=2
// var c=3;

// [a,b,c]=[c,a,b]
// console.log(a,b,c);

// console.log(test());

// function test(){
//     return "Hello world"
// }

// console.log(a());

// const a=()=>{
//     return "Salam dunya"
// }



