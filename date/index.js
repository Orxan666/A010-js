"use strict";

const users = [
    {
        username: 'cvd323',
        likes: 32,
        channels: ['Advanced Python']
    },
    {
        username: 'snsnn36',
        likes: 12,
        channels: ['Java theory', 'Spring Tutorial', 'Java SE'],
        blocked: true
    },
    {
        username: 'fda520',
        likes: 56,
        channels: ['DevOPS basics', 'Docker Advance'],
    },
    {
        username: 'sda53',
        channels: ['Concurrency', 'RabbitMQ', 'KafkaMQ'],
    },
]

const newUser = {
    username: 'zul12',
    likes: 19,
    channels: ['Git & Github', 'HolidayCookie'],
}

// 1. Neçə dənə user mövcud oluduğunu göstərin
// let count=0
// for(let user of users){
//     count++;
// }console.log(count)
//  2. Sondan 2-ci userin username-ini göstərin
// for(let i=0;i<users.length;i++){
//     if(i===users.length-2){
//         console.log(users[i].username);
//     }
// }
// 3. ilk user-in channel sayi ile sonununcu user-in channel sayinin cemini gosterin
// debugger
// let sum=0
// for(let i=0;i<users.length;i++){
//     if(i===0 || i===users.length-1){
//         sum+=users[i].channels.length;
//     }
// }console.log(sum);
// 4. 1-ci indexdeki userin blocked keyini silin
// for(let  i in users){
//     if(i===0){
//         delete users[i].blocked
//     };
// }

// 5. 0-ci indexdeki userin like sayini 3 qatina cixarin
for(let i in users){
    if(i===0){
        users[i].likes=users[i].likes*3
    }
}
// 6. 3-cu indexdeki userin channels-indeki sonuncu elementi silib basa elave edin
for(let i in users){
    if(i==3){
        let last=users[i].channels.pop()
        users[i].channels.unshift(last)
    }
}
// 7. 1-ci indexdeki userin channels elementlerini 2-ci indexe de elave edin
// for(let )
// 8. 3-cu indexdeki usere likes keyi elave edin, value-si username-inin lengthinin 10 qati olacaq.
// for(let i in users){
//     if(i===3){
//         users[i].likes=users[i].username.length*10
//     }
// }
// 9. newUser-i users array-ine elave edin ve like sayini movcud deyerin kvadratina beraber edin
users.push(newUser)
newUser.likes=newUser.likes**2
console.log(users);





// function test(){
//     return "Hello world"
// }


// test()


// const myList=[1,2,3,4]

// myList.push(5)

// console.log(myList);

// setTimeout(()=>{
//     alert("Salam xos gorduk")
// },3000)

// setTimeout(() => {
//     sdvsdvsvd
// }, 5000);

// setInterval(() => {
//     console.log("Salam");

// }, 3000);


// const a=Math.round(Math.random()*(10-1)+1)
// console.log(a);




// const orxan=new Date()
// console.log(orxan);
// console.log(orxan.getFullYear());
// console.log(orxan);

