// 'use strict'

// let a;
// let aa;
// let aaa;
// ***************************************
// function add (a,b){
//     console.log(a+b)
// }

//  add(3,4)

// let abc = function add (a,b){
//     console.log(a+b)
// }

// abc(3,4)
// ***************************************
// function stack (){
//     stack()
// }
// stack()

// stack overfall
// ***************************************
// var a = 6;
// var b = 2;

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a**b)
// ***************************************
// var x = 6;
// var y = 3;

// x = --y   // bu satirda y = 2
// console.log({x}) //  bu satirda y = 2
// console.log({y})
// ***************************************
// var c = 6;
// var d = 3;

// c = d--  // bu satirda d = 3
// console.log({c})  // bu satirda d = 2
// console.log({d})
// ***************************************
// var b= 5;

// console.log(++b) // 6
// console.log(+b) // 5
// console.log({b}) // 6

// var a = ++b // b=6
// console.log({b}) // b=6
// console.log({a}) // a=6

// a = b++
// var a = ++b // a=b, b=b+1
// console.log({b}) // 6
// console.log({a}) //5
// ***************************************
// a = 2;
// b = 6;
// console.log(b%a)
// ***************************************
// Assignment Operators

// var a = 2;
// var b = 3;

// console.log(a=b, {a},{b})
// console.log(a+=b, {a},{b})
// console.log(a-=b, {a},{b})
// console.log(a*=b, {a},{b})
// console.log(a%=b, {a},{b})
// ***************************************
// var a = 2;
// var b = '2';

// console.log('equality',a!=b) // false
// console.log('strict equality',a!==b) // true
// ***************************************
// let age = 14;

// console.log(age >= 14) // true 
// console.log(age > 14) // false
// ***************************************
// console.log(false == false) // true
// console.log(Boolean(0) == false) // true
// console.log(Boolean('0') == false) // false
// console.log(0 == false) // true
// console.log('0' == false) // true
// ***************************************
// console.log(typeof null) // object
// console.log(null == false) // false
// console.log(null == true) // false
// console.log(null + 3) // 3
// console.log(null == 0) // false
// console.log(Boolean(null) == false) // true
// console.log(Boolean(null) == Boolean(0)) // true


// console.log(typeof NaN)

// ***************************************
// isNaN


// Kullanicidan alinan veri sayi mi degilmi
// var a ;

// while(isNaN(a)){
//     a = prompt("Enter a Number")
//     a = Number(a) 
//     console.log(a, typeof a)   
// } 
// ***************************************

// console.log(015+025) //34 = 13+21 (basinda sifir oldugu icin 'Octal' sayi sistemine göre toplar)
// console.log(15+025) //36 = 15 + 21
// console.log(015+25) //38 = 13 + 25
// console.log(15+25) //40 
// ***************************************

// console.log(9 < 8) // false
// console.log(9 < 8 < 7) // true
// console.log(false < 7) // true

// ***************************************

// console.log('Clarusway' > 'clarusway')
// console.log('C' .charCodeAt()) // ASCII Code: 67
// console.log('c' .charCodeAt()) // ASCII Code: 99
