"use strict";

// let a=5
// console.log(a);

// Object
let person={
    id:1,
    firstName:"Abbas",
    lastName:"Hesenzade",
    age:26
}
// Add
person.hobby="Football"

// Change
person.firstName="Orxan"

// Delete
delete person.age
// console.log(person);


// let myList=["Teymur","Sevda","Nermin","Vefa","Abbas","Ferid","Erfan","Mehseti"]

// myList[0]="Orxan"
// myList[4]="Bagdagul"

// console.log(myList);

// let country=["Hindistan sokak lezzetleri","Orxan"]



// console.log(country[1][2]);




// const age=prompt("Yasinizi daxil edin")

// if(age>=18){
//     alert("Xos geldiniz")
// }
// else{
//     alert("18 yasdan kicikler sayta daxil ola bilmez")
// }


// let reng=prompt("Rengi daxil edin")

// if(reng=="qirmizi"){
//     alert("Dayanin")
// }
// else if(reng=="sari"){
//     alert("Gozle")
// }
// else if(reng=="yasil"){
//     alert("Gede bilersiniz")
// }
// else{
//     alert("Daxil etdiyiniz reng movcud deyil")
// }




// const speed=Number(prompt("Sureti daxil edin: "))
// // console.log(typeof(speed));

// if (speed > 1 && speed < 30){
//     alert("Zeif gedirsen")
// }

// else if (speed > 30 && speed < 60){
//     alert("Orta gedirsen")

// }

// else if (speed > 60 && speed < 90){
//     alert("Biraz yavasla")

// }

// else if (speed >= 90){
//     alert("Ucassan ??!!")

// }
// else{
//     alert("Zehmet olmasa suretle bagli reqem daxil edin")
// }

// ++a ilə a ++ fərqi nədir?


// let a=4

// let b=3
// b=++a

// console.log(a);

let a=4

let b="4"

// == yalniz deyerin beraber olub olmadigini 
// === hem tipin hemde deyerin beraber olub olmadigini yoxlayir

// if(a===b){
//     console.log(true);
// }
// else{
//     console.log(false);
    
// }

// debugger;
// let myList=["Teymur","Sevda","Nermin","Vefa","Abbas","Ferid","Erfan","Mehseti","Saleh","senuber"]
// let i=0
// while(i<myList.length){
//     // console.log(myList[i]);
//     if(myList[i][0].toUpperCase()==="S"){
//         console.log(myList[i]);
        
//     }
//     i+=1
    
// }

// do {
//     console.log("Salam");
    
    
// } while (i>myList.length);

let myArr=['cup', 'plate', 'spoon', 'knife', 'fork']

let j=0
while(j<myArr.length){
    console.log(myArr[j]);
    j+=1
    
}