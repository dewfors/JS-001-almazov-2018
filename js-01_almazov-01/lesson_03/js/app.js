/**
 * Created by zm on 29.08.2018.
 */

/***
 * задачи
 */


let a = 1;


//
// /***
//  * 1. Написать функцию-конструктор, создающую прямоугольник
//  */
//
//
// function Rectangle(w, h) {
//
//     this.htmlCode = `<div style="width: ${w}px; \
//                                  height: ${h}px; \
//                                  background: red"></div>`;
//     this.show = function () {
//         document.write(this.htmlCode);
//     }
//
// }
//
// var rect = new Rectangle(100, 100);
// rect.show();
//
// /***
//  * 2. Написать функцию-конструктор, создающую круг
//  */
//
//
//
// /***
//  * 3. Написать функцию-конструктор, создающую треугольник
//  */
//
// function Triangle(h, w, color) {
//     this.htmlCode = `<div style="border: ${w}px solid transparent; \
//
//                                  border-bottom: ${h}px solid ${color}; \
//                                  width: 0; \
//                                  "></div>`;
//     this.show = function () {
//         document.write(this.htmlCode);
//     }
// }
// var triangle = new Triangle(50, 100, "red");
// triangle.show();
//
// /***
//  * 3.5. Написать функцию-конструктор, создающую объявление
//  * как на авито, avito.ru, посмотреть и сделать также.
//  * var myAd = new Ad("Продам кота", "Мягкий, пушистый,
//  * без вредных привычек", "+79455555555"б "Кеша");
//  * myAd.show(); //отображается на экране
//  */
//


// /***
//  * наследование и прототипы
//  */
//
// function Bird() {
//     this.whatIsYourName = function () {
//         console.log(`Меня зовут ${this.name}`);
//     }
// }
//
// //расширение конструктора
// Bird.prototype.setName = function (n) {
//     this.name = n;
// }
//
// Parrot.prototype = new Bird();
//
// function Parrot() {
//     this.canSpeak = true;
// }
//
//
// var kesha = new Parrot();
// kesha.setName("kesha");
// kesha.whatIsYourName();
// console.log(kesha);


//ECMAScript 2015
// поддержка классов

// class Bird{
//     constructor(n){
//         this.name = n;
//     }
//
//     whatIsYourName(){
//         console.log(`Меня зовут ${this.name}`);
//     }
// }
//
// var kesha = new Bird("kesha");
// kesha.whatIsYourName();
// console.log(kesha);


// // пример на товарах
//
// class Product {
//     constructor(name, price, manufacturer) {
//         this.name = name;
//         this.price = price;
//         this.manufacturer = manufacturer;
//     }
// }
//
// // игрушка наследуется от товара
// class SoftToys extends Product {
//     constructor(name, price, manufacturer){
//         super(name, price, manufacturer); // вызовет конструктор у родителя
//         this.isSoft = true;
//     }
//     setWeight(weight){
//         this.weight = weight;
//     }
// }
//
//
//
// var  kesha = new SoftToys("Плюшевый Кеша", 1000, "China indusries");
// kesha.setWeight("100 г")
// console.log(kesha);


// //тонкости
// function abc1() {
//
// }
//
// var a1 = abc1(); // вернет undefined
//
//
// function abc2() {
//     return 5;
// }
//
// var a2 = abc2(); // вернет 5
//
// var a3 = new abc2(); // object


// // все является объектом
// var array = [];
// var array = new Array();
//
//
// var obj = {};
// var obj = new Object();


//prototype это свойство функции конструктора


// // массивы
// var array = [1,2,3,4,5];
// //склеить элементы массива
// var str = array.join(";");
// console.log(str);
//
// // slice - формирует новый массив на основе старого
// // с 1 по 3 индекс элемента, не включая
// var array2 = array.slice(1,3);
// console.log(array2);
//
//
// // удаление 1 элемент с нулевого индекса из исходного массива
// // удаленный элемент записывается в новый массив
// // splice - удалятор и добавлятор в массив и заменятор
// var array3 = array.splice(0, 1);
//
// console.log(array);
// console.log(array3);
//
//
// array.splice(0, 0, 123, 456);
// console.log(array);


// //строки
// var str = "Привет, Москва";
// var i = str.includes("Москва"); //true входит ли подстрока в строку
//
//
// // Транслятор кода и новой версии в старую
// // https://babeljs.io



//задача: массив чисел Фибоначи
var nums = [1, 1];
var iterator = 1;

for (var i = 2; i <= 10000; i++){
    fibo(i);
}

function fibo(n) {
    var n1 = nums[iterator];
    var n2 = nums[iterator-1];
    if (n==(n1+n2)){
        nums.push(n);
        iterator++;
    }
}

console.log(nums);


// var nums = [1, 1];
// var iterator = 1;
//
// fibo();
//
// function fibo() {
//     var i = nums[iterator] + nums[iterator-1];
//     if (i <= 10000) {
//         nums.push(i);
//         console.log(nums);
//         iterator++;
//         setTimeout(fibo, 1000);
//     }
//
// }

// задача
// создать новый массив из старого (числа Фиббоначи)
// элемены должны быть нечетные и больше 500

// var nums2 = nums.filter(function (n) {
//     return (n>500 && n%2 == 1);
// });
//
// console.log(nums2);



// задача спираль из кружочков

function Spiral(count) {
    this.count = count;
    this.baseCoords = {x: 400, y: 400};
    this.step = 40;
    this.index = 0;
    this.direction = 1; //1 - влево, 2 - вверх, 3 - вправо, 4 - вниз
    this.show = function () {
        var html = `<div style="width: 20px; \
                                height: 20px; \
                                border-radius: 50%; \
                                position: absolute; \
                                top: ${this.baseCoords.y}px; \
                                left: ${this.baseCoords.x}px; \
                                background-color: red; \
                                "></div>`;
        document.write(html);

        if (this.index < this.count){
            //влево
            if (this.direction == 1){
                this.direction = 2;
                this.baseCoords.x -= this.step;
                //this.baseCoords.y -= this.step;
                this.step +=20;
                this.index++;
                //setTimeout(this.show, 2000);
                this.show();
            }

            //вверх
            if (this.direction == 2){
                this.direction = 3;
                this.baseCoords.y -= this.step;
                //this.baseCoords.x += this.step;
                this.step +=20;
                this.index++;
                //setTimeout(this.show, 2000);
                this.show();
            }

            //вправо
            if (this.direction == 3){
                this.direction = 4;
                this.baseCoords.x += this.step;
                //this.baseCoords.y += this.step;
                this.step +=20;
                this.index++;
                //setTimeout(this.show, 2000);
                this.show();
            }


            //вниз
            if (this.direction == 4){
                this.direction = 1;
                this.baseCoords.y += this.step;
                //this.baseCoords.x -= this.step;
                this.step +=20;
                this.index++;
                //setTimeout(this.show, 2000);
                this.show();
            }

        }



    }

}

var spiral = new Spiral(20); // количество кружочков
spiral.show();













