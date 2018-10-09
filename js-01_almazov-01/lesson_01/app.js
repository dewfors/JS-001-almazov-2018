/**
 * Created by zm on 31.07.2018.
 */

// console.log("Привет, Москва!");
//
// var a = 5,
//     b = 10,
//     c = a + b;
//
// console.log("a:",a,"b:",b,"c:",c);
//
//

//
// for(var i = 0; i <10; i++){
//     console.log("привет")
//     console.log("кеша")
// }
//
// for(var i = 10; i > 0; i--){
//     console.log("привет")
//     console.log("кеша")
// }
// //написать программу, вычисляющую сумму всех чисел от 1 до 10
// var s = 0;
// for(var i = 1; i <=10; s += i, i++){
//     //s += i;
// }
// console.log(s);
//


//инкремент - дикремент
// var a = 5;
// var b = a++;
// console.log(a); //6
// console.log(b); //5
//
// var d = 5;
// var  e = ++d;
// console.log(d); //6
// console.log(e); //6


//управляющие конструкции

//условные операторы
// var age = 15;
// if (age < 18){
//     console.log("тебе еще рано смотреть этот фильм")
// } else {
//     console.log("уже можно! проходи в кинозал")
// }

// var age = prompt("сколько тебе лет?");
// if (parseInt(age) < 18){
//     console.log("тебе еще рано смотреть этот фильм")
// } else {
//     console.log("уже можно! проходи в кинозал")
// }


//case
// var car = "audi";
// switch (car){
//     case "bmv":
//         console.log("это автомобиль bmv");
//         break;
//     case "audi":
//         console.log("это автомобиль audi");
//         break;
//     default:
//         console.log("это возможно автомобиль");
// }


//функции

// //объявление функции abc, function declaration
// // определение функции
// //доступна из любого места программы
// //т.е. вызывать такую функцию можно раньше ее определения
// function abc() {
//     console.log("была вызвана функция abc");
// }
// //вызов функции
// abc();
//
// //объявление функции abc2, function expression
// //функциональное выражение
// //вызывать функциональное выражение можно
// // только после ее задания таким способом
// var abc2 = function () {
//     console.log("была вызвана функция abc2")
// }
//
//
// //вызов функции
// abc2();


//в функцию можно передавать аргументы
//делается это через вызов функции

// function abc(x, y, z) {
//     return x * y * z;
// }
//
// var result = abc(10, 15, 20);
// console.log(result);


/**Задача:
 * написать функцию, которая принимает на вход 2 числа
 * функция отображает все числа из заданного числами диапазона
 * abc(1, 3)
 * 1
 * 2
 * 3
 */

// function range(start, end) {
//
//     if (typeof (start) == "number" && typeof (end) == "number"){
//         if (start < end){
//             for (var i = start; i < end + 1; i++) {
//                 console.log(i);
//             }
//         } else {
//             console.log("неправильно задан диапазон");
//         }
//     } else {
//         console.log("пожалуйста, введите числа");
//     }
//
// }
//
// range(2, 8);
// range(5, 1);
// range("kesha", 2);


/** задачи:
 * 1. Написать функцию, которая выводит нечетные числа из диапазона
 * 2. Написать функцию, которая выводит числа, делящиеся на 3 без остатка
 *
 * Бонус
 * 3. Написать функцию, которая выводит числа Фибонначи из диапазона
 * 4. Написать функцию, которая выводит простые числа из диапазона
 * - простые: делятся на себя и на единицу без остатка
 */

//задача 1.
// function oddNumbers(start, end) {
//     if (typeof (start) != "number" || typeof (end) != "number") {
//         console.log("пожалуйста, введите числа");
//         return;
//     }
//
//     if (end < start){
//         console.log("неправильно задан диапазон");
//         return;
//     }
//
//     for (var i = start; i < end + 1; i++) {
//         if (i%2 == 1){
//             console.log(i);
//         }
//     }
// }
//
// oddNumbers("kesha", 2);
// oddNumbers(5, 2);
// oddNumbers(5, 25);


//Задача 2.

// function sharing3(start, end) {
//     if (typeof (start) != "number" || typeof (end) != "number") {
//         console.log("пожалуйста, введите числа");
//         return;
//     }
//
//     if (end < start){
//         console.log("неправильно задан диапазон");
//         return;
//     }
//
//     for (var i = start; i < end + 1; i++) {
//         if (i%3 == 0){
//             console.log(i);
//         }
//     }
// }
//
// sharing3(5, 25);


//
// function a(c) {
//     console.log("привет из А");
//     c();
// }
//
// var b = function () {
//     console.log("привет из B");
// }
//
// a(b);


//Асинхронное выполнение кода
// function kesha() {
//     console.log("привет кеша");
// }
//
// /**
//  * setTimeout() - позволяет задать отсрочку выполнения кода
//  */
//
//
// setTimeout(kesha, 3000);
// console.log("привет гена");
//


/**Задача
 * вывести числа в консоли от 1 до 10 с задержкой в 1 сек
 */

// var i=0;
//
// function myFunc() {
//     console.log(i);
//     i++;
//     if (i > 10) return;
//     setTimeout(myFunc, 2000);
// }
//
// myFunc();


//анонимная функция
// функция без имени
//используется тогда, когда она должна отработать
// только в одном месте программы, и больше нигде

// setTimeout(function () {
//     console.log("привет из анонимной функции");
// },1000);

//вывод в html
// var str = "<h1>" + "\"Заголовок\"" + "</h1>";
// document.write(str);


/** Задача 1
 * написать функцию, которая выводит на экран прямоугольники
 * rect(100, 50) выведет прямоугольник
 * с шириной 100px и высотой 50px
 * цвет красный
 *
 * Задача 2
 * вывести на экран 200 кругов разного размера и цвета
 * диапазон разброса радиусов от 50px до 150px
 * Math.random() генерирует число от 0 до 1
 */



function rect(w, h) {
    var str = "<div style=\"width: " + w + "px; height: " + h + "px; background: red;\" ></div>";
    //console.log(str);
    document.write(str);
}

rect(100, 50);

function get_random_color(){
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

function generateRGB() {
    return "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
}

function circle(repeat) {
    for (var i = 1; i <= repeat; i++){
        var radius = parseInt(Math.random()*100+50);
        var color = get_random_color();
        // var str = "<div style=\"width: " + radius + "px; height: " + radius + "px; background: "+color+"; border-radius: 50%\" ></div>";
        var str = "<div style=\"width: " + radius + "px; height: " + radius + "px; background: "+generateRGB()+"; border-radius: 50%\" ></div>";
        //console.log(str);
        document.write(str);
    }
    //console.log(radius);
}

circle(200);





























