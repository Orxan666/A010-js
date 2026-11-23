// JAVASCRIPT TAPŞIRIQLARI
// Mövzular: Variables, String Methods, Comments, Nested Objects
// ==========================================================

// 1. (Variables: var, let, const)
// const ilə məhsulun adını ("Alma"), let ilə qiymətini (2) saxlayın.
// Sonra qiyməti 3-ə dəyişin və console-a çıxarın.
// Nümunə: Alma: 3 AZN
// Əlavə: const dəyişənini dəyişməyə çalışsanız nə baş verəcəyini yazın.
// const apple = "alma";
// apple = 'pear'
// let price = 2;
// price = 3;

// console.log(`${apple}:${price}azn`)
// console.log(apple,price, "AZN");



// 2. (Variables və riyaziyyat)
// Məhsulun qiyməti 12 AZN, miqdarı 5 ədəddir. Ümumi məbləği tapın.
// Əgər 10% endirim varsa, endirimdən sonrakı məbləği də tapın
// və console-a çıxarın.
// let price = 12
// let amount = 5
// let total = price * amount
// let discount = total - (total * 10) / 100
// console.log(total);

// console.log(discount)

// 3. (String Methods)
// let text = "  JavaScript Öyrənirəm  " verilib. Aşağıdakıları tapın:
// - Boşluqları silin (trim)
// - Hamısını böyük hərflə yazın (toUpperCase)
// - Mətnin uzunluğunu tapın (length)
// Nəticələri console-a çıxarın.

// let text= "    JavaScript oYRENIREM   "
// let result= text.trim()
// result=result.toUpperCase()

// console.log(result.length);

// console.log(result);

// 4. (String Methods və Comments)
// let email = "aysel@gmail.com" verilib.
// includes, indexOf və slice metodlarından istifadə edərək:
// - Emailin tərkibində @ olub-olmadığını yoxlayın
// - İstifadəçi adını (@-dən əvvəlki hissə) ayırın
// Hər addımın üstünə şərh (comment) yazın ki, nə etdiyi aydın olsun.
// let email="aysel@gmail.com"
// console.log(email.includes("d"));
// console.log(email.slice(0,6));
// console.log(email.indexOf("@"));



// 5. (Nested Objects)
// Aşağıdakı obyekt verilib:

// const student = {
//   name: "Aysel",
//   age: 20,
//   address: {
//     city: "Bakı",
//     street: "Nizami küçəsi",
//     home: { block: 5, apartment: 12 }
//   }
// };
// console.log(`${student.name} ${student.address.city} sheherinde ${student.address.home.block}-ci blokda ${student.address.home.apartment} menzilde yashayir.`);
// student.address.city="Gence"
// student.phone="+994 99 999 99 99"
// console.log(student);





// Console-a çıxarın:
// Aysel Bakı şəhərində, 5-ci blokda, 12-ci mənzildə yaşayır.
// Sonra city dəyərini "Gəncə" ilə əvəz edin və yeni phone xassəsi əlavə edin.


// ---------------------------------


// let count=10

// count=count-1
// count-=4

// console.log(count);



// let x=11
// x%=4
// console.log(x);


// let a=11

// a++
// a--

// console.log(a);


let ad="Orxan"
// ad[0]="A"
console.log(ad);



