// var str1 = "<h1>Заголовок</h1>";
// var str2 = "<h2>Заголовок 2-го уровня</h2>";
// document.write(str1);
// document.write(str2);

/** Задание:
 * написать функцию, которая создает прямоугольник
 * заданного размера и цвета
 */

function rect(w, h, color) {
    var str = '<div style=\"width:' + w + 'px; height: ' + h + 'px; background: ' + color + ';" ></div>';
    document.write(str);
}

function generateRGB() {
    return "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
}
//
//rect(Math.random()*200, Math.random()*200, generateRGB());

/** задание:
 * написать функцию, создающую круг случайного размера и цвета
 * разброс радиуса от 50px до 150px
 * @param repeat - количество повторов
 */





/**
 * описание стандарта по документировнию кода
 * http://usejsdoc.org
 *
 * Правила оформления кода от Google
 * https://google.github.io/styleguide/javascriptguide.xml
 */


/**
 * Generate a random color in Hex
 * @returns {string}
 */
function generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * Makes a random circle
 * @param repeat
 */
function circle(repeat) {
    for (var i = 1; i <= repeat; i++) {
        var radius = parseInt(Math.random() * 100 + 50),
            diametr = radius * 2,
            color = generateColor();
        // var str = "<div style=\"width: " + radius + "px; height: " + radius + "px; background: "+color+"; border-radius: 50%\" ></div>";
        var htmlCode = `<div style="width: ${diametr}px; \
                                    height: ${diametr}px; \
                                    background: ${color}; \
                                    border-radius: 50%"> \
                        </div>`;
        //console.log(str);
        document.write(htmlCode);
    }
    //console.log(radius);
}

//circle(2); // вызов функции

//асинхронный вызов функции

// setTimeout(function () {
//     circle(2);
// }, 2000);

//rect(Math.random() * 200, Math.random() * 200, generateRGB());


/**
 * Задача:
 * вывести 20 кругов разного размера и цвета
 * с интервалом в 1 сек
 */

/**
 * вариант 1
 */
// for (var i = 0; i < 20; i++) {
//     setTimeout(function () {
//         circle(1);
//     }, (i + 1) * 1000);
// }
//
// circle(1);

/**
 * вариант 2
 */

// var i=0;
//
// function showCircle() {
//     circle(1);
//     if (i < 20){
//         i++;
//         setTimeout(showCircle, 1000);
//     }
// }
//
// showCircle();


/**
 * анонимные функции
 */

// (function () {
//     console.log("привет из анонимной функции")
// })();
//
//
// (function (name) {
//     console.log(`привет из ${name}`);
// })("Кеша");
//
//
// setTimeout(function () {
//     console.log("привет из setTimeout");
// }, 3000);
//
//
// var a = function () {
//     console.log("привет из A");
// };
// a();


/**
 * Области видимости
 */

// var i = 5;
//
// function a() {
//     var i = 6;
//     console.log(i);
// }
// a();
// console.log(i); //будет 5


/**
 * Объекты
 * Структура, служит для хранения разнородных значений
 */

// var empty = {};
// console.log(empty);
//
// var movie = {
//     name: "Отряд",  //свойство объекта
//     year: 2016      //свойство объекта
// };
// console.log(movie);
//
// var myObj = {};
// myObj["property"] = 5;  //свойство объекта
// myObj.property2 = 10;   //свойство объекта
// console.log(myObj);
//
// // this - указатель на текущий объект
// var kesha = {
//     name: "Кеша",
//     whatIsYourName: function () {
//         console.log(`Меня зовут ${this.name}`);
//     },
//     setAge: function (age) {
//         this.vozrast = age;
//     },
//     skolkoTebeLet: function () {
//         console.log(`Мне ${this.vozrast} лет`);
//     }
// };
//
// kesha.whatIsYourName();
// kesha.setAge(5);
// kesha.skolkoTebeLet();
// console.log(kesha);


// Глобальный объект window
// console.log(window);
// var a = 5; //на самом деле это создание свойства глобального объекта window
// console.log(window.a);


/**
 * Массивы - для хранения однотипных данных
 * можно обращаться по индексу
 */

// var cyties = ["Москва", "Анапа", "Сызрань", "Сочи"];
// console.log("Количество элементов в массиве: " + cyties.length);
// console.log(cyties[0]);
// console.log(cyties[3]);
// console.log(cyties[5]);
//
// //добавление элемента в массив
// cyties.push("Саратов");
// console.log(cyties);
//
// //обход элементов массива, добавляет в конец
// for (var i = 0; i < cyties.length; i++) {
//      console.log(cyties[i]);
// }


/**
 * Задача:
 * создать массив и добавить в него нечетные числа от 50 до 150
 *
 * Бонус:
 * создать массив чисел-палиндромов от 1 до 1000
 */

// var odds = [];
// for (var i = 50; i < 150; i++) {
//     if (i % 2 != 0) odds.push(i);
//
// }
// console.log(odds);
//
// console.log(String(123).split('').reverse().join(''));
//
//
// function isPalindrom(num) {
//
//     //вариант 1
//     // var i = parseInt(String(num).split('').reverse().join(''));
//     // if (num != i) return false;
//     // return true;
//
//     //вариант 2
//     var oldNum = num,
//         newNum = 0;
//
//     while (num > 0) {
//         newNum = newNum * 10 + num % 10;
//         num = parseInt(num / 10);
//     }
//
//     if (oldNum == newNum) return true;
//     return false;
//
// }
//
// var palindroms = [];
// for (var i = 1; i < 1000; i++) {
//     if (isPalindrom(i)) palindroms.push(i);
// }
// console.log(palindroms);


// /**
//  * еще вариант перебора массива
//  */
// var nums = [1, 2, 3, 4, 5];
// nums.map(function (elementOfNums) {
//     console.log(elementOfNums);
// });
//
//
// /**
//  * ECMAScript 2015
//  * Стрелочные функции в map
//  */
//
// var candies = ["эклер", "мороженное", "печенье", "шоколад"];
// // f - каждый элемент массива
// candies.map(f => console.log(f));

function isOdd(num) {
    if (num % 2 != 0) return true;
    return false;
}
//
// var nums = [1, 2, 3, 4, 5, 6, 7, 8];
// var nums2 = nums.map(x => x * x);
// var nums3 = nums2.filter(isOdd)
// console.log(nums);
// console.log(nums2);
// console.log(nums3);


/**
 * Generates a range of numbers
 * @param {integer} count - size of array
 * @returns {Array} Collection of natural numbers
 */
function range(count) {
    var array = [];
    for (var i = 0; i < count; i++) {
        array.push(i);
    }
    return array;
}

//console.log(range(1000).filter(isOdd));


/**
 * Объектно-ориентированное программирование - ООП
 */

// Функции-конструкторы

// function Bird(n) {
//     this.name = n;
//     this.whatIsYourName = function () {
//         console.log(`Меня зовут ${this.name}`);
//     }
// }
//
// var kesha = new Bird("Кеша");
// var gena = new Bird("Гена");
// console.log(kesha);
// console.log(gena);
// kesha.whatIsYourName();
// gena.whatIsYourName();

/**
 * видео js1-2  -   3:10:42
 */

/**
 * Задача:
 * написать функцию-конструктор пряоугольника Rectangle
 * отображать прямоугольник через функцию show()
 */


function Rectangle(w, h, color) {

    this.width = w;
    this.height = h;
    this.background = generateColor();

    //this.div    =`<div style="width: ${w}px; height: ${h}px; background: red;"></div>`;
    this.show = function () {
        var box =`<div style="width: ${this.width}px; \
                              height: ${this.height}px; \
                              background: ${this.background}"></div>`;
        document.write(box);
    }
}

// function generateRGB() {
//     return "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
// }

var box = new Rectangle(200, 50);
box.show();

// range(200).map(function () {
//     (new Rectangle(200, 50)).show();
// });

// range(200).map(x => new Rectangle(200, 50))
//            .map(x => x.show());

range(200).map(x => (new Rectangle(200, 50)).show());


























