/**
 * Created by zm on 29.08.2018.
 */

// window.outerHeight
// window.innerHeight
// window.outerWidth
// window.innerWidth

// window.open("https://google.com","_self");

// function exit() {
//     var exit = confirm("Хотите закрыть страницу?");
//     if (exit) window.close();
// }


// window.document
// document.title="привет";


// //создаем строчный элемент
// // HTMLElement
// var element = document.createElement("span");
//
// //создаем текстовый узел
// //HTMLNode
// var text = document.createTextNode("My Text");
//
// //добавляем текст в строчный элемент
// element.appendChild(text);
//
// // добавляем строчный элемент в body
// document.body.appendChild(element);


/**
 * Задача:
 * Сделать таблицу умножения
 * и отобразить на экране от 1 до 10
 */

// function multiTable(n, m) {
//     var table = document.createElement("table");
//     for (var i = 1; i <= n; i++){
//         var tr = document.createElement("tr");
//         for (var j = 1; j <= m; j++){
//             var td = document.createElement("td");
//             var text = document.createTextNode(`${i} x ${j} = ${i*j}`);
//             td.appendChild(text);
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }
// multiTable(5, 5);
// // multiTable(10, 10);
// // multiTable(10, 10);
// // multiTable(15, 15);
//
// function MultiTable(n, m) {
//     this.rows = n;
//     this.cols = m;
//
//     this.init_ = function () {
//         this.table = document.createElement("table");
//         for (var i = 1; i <= this.rows; i++){
//             var tr = document.createElement("tr");
//             for (var j = 1; j <= this.cols; j++){
//                 var td = document.createElement("td");
//                 var text = document.createTextNode(`${i} x ${j} = ${i*j}`);
//                 td.appendChild(text);
//                 tr.appendChild(td);
//             }
//             this.table.appendChild(tr);
//         }
//     }
//
//     this.show = function () {
//         document.body.appendChild(this.table);
//     }
//
//     this.init_();
// }
//
// var tb = new MultiTable(10, 10);
// tb.show();

// // getElementById - выбирает текущий элемент
// // gena - объект, HTMLElement
// var gena = document.getElementById("gena");
// gena.style.background = "lightseagreen";
//
// // newTag - объект, HTMLElement
// var newTag = document.createElement("span");
// var newText = document.createTextNode("My text");
// newTag.appendChild(newText);
// gena.appendChild(newTag);
//
// // abcs HTMLCollection
// var abcs = document.getElementsByClassName("abc");
//
// for (var i =0; i < abcs.length; i++){
//     //console.log(abcs[i].innerText);
//     // abcs[i] - HTMLElement
//     abcs[i].style.color = "white";
//
// }
//
// // // забрали map у Array
// // HTMLCollection.prototype.map = Array.prototype.map;
// // abcs.map(x => console.log(x.innerText));

// video 3:00:59

/**
 * Задания:
 *
 * 1. Создать цункцию-конструктор, которая создает круги.
 * на вход передавать id - элемента, куда будет рисовать круг и радиус.
 * Цвет по умолчанию - красный.
 * Если передать в функцию id элемента, радиус и цвет -
 * то цвет, который предали
 *
 */


function Circle(id, radius, color) {
    this.idParent = id;
    this.radius = radius;
    this.color = (color == "" || color == undefined) ? "red" : color;

    console.log(color);

    this.init_ = function () {
        this.parent = document.getElementById(id);
        this.circle = document.createElement("div");
        this.circle.style.width = `${2*radius}px`;
        this.circle.style.height = `${2*radius}px`;
        this.circle.style.borderRadius = "50%";
        this.circle.style.background = this.color;
    }
    this.init_();

    this.show = function () {
        this.parent.appendChild(this.circle);
    }

}

// var myCircle = new Circle("gena",100,"blue");
// myCircle.show();
// // var myCircle2 = new Circle("gena",100,"");
// var myCircle2 = new Circle("gena",100);
// myCircle2.show();


/**
 * 2. создать функцию-конструктор, которая создает прямоугольники.
 * на вход - ширина, высота и цвет (опционально). по умолчанию - зеленый
 */

// function Rectangle(id, w, h, color) {
//     this.idParent = id;
//     this.width = w;
//     this.height = h;
//     this.color = (color == "" || color == undefined) ? "green" : color;
//
//     //console.log(color);
//
//     this.init_ = function () {
//         this.parent = document.getElementById(id);
//         this.rectangle = document.createElement("div");
//         this.rectangle.style.width = `${w}px`;
//         this.rectangle.style.height = `${h}px`;
//         this.rectangle.style.background = this.color;
//     }
//     this.init_();
//
//     this.show = function () {
//         this.parent.appendChild(this.rectangle);
//     }
//
// }
//
// // var myRect = new Rectangle("gena", 100, 200, "blue");
// // myRect.show();
// // var myRect = new Rectangle("gena", 100, 200, "");
// var myRect = new Rectangle("gena", 100, 200);
// myRect.show();


/**
 * 3. создать функцию-конструктор, которая создает треугольники.
 * на вход - основание, высота, цвет (опционально). по умолчанию - желтый.
 * Также задать внутри функцию конструктора - setDirection, которая
 * позволит размещать треугольник в заданном направлении
 * (вверх, вправо, вниз, влево)
 */

// function Triangle(w, h, color) {
//     this.w = w;
//     this.h = h;
//     this.color = color;
//     this.init_ = function () {
//         this.triangleElement = document.createElement("div");
//         this.triangleElement.style.width = "0";
//         this.triangleElement.style.height = "0";
//         this.triangleElement.style.border = `${this.w / 2}px solid transparent`;
//         this.triangleElement.style.borderBottom = `${this.h}px solid ${this.color}`;
//     }
//
//     this.show = function () {
//         document.body.appendChild(this.triangleElement);
//     }
//
//     this.setDirection = function (direction) {
//         switch (direction){
//             case "up":
//                 break;
//             case "right":
//                 this.triangleElement.style.transform = "rotate(90deg)";
//                 break;
//             case "down":
//                 this.triangleElement.style.transform = "rotate(180deg)";
//                 break;
//             case "left":
//                 this.triangleElement.style.transform = "rotate(270deg)";
//                 break;
//         }
//     }
//
//     this.init_();
//
// }
//
// var t = new Triangle(50, 150, "orange");
// t.setDirection("left");
// t.show();
// var t2 = new Triangle(150, 150, "lime");
// t2.show();


/**
 * источники
 * w3schools
 * csstricks
 * smashinmagazine
 * frontendermagazine
 * javascript weekly
 * You Don't Know JS
 * https://github.com/getify/You-Dont-Know-JS
 * Флэнаган - javascript definition guide
 *
 * jQuery
 * Angular
 * Aurelia.io
 * React/Redux\Flux
 * google closure library
 * Ext.JS
 *
 * WebAssembler
 * CoffeeScript -> JS
 * TypeScript -> JS
 * ClojureScript -> JS
 */



/**
 * Введение в события
 */

// function abc() {
//
// }
//
// // 1. Явный вызов
// abc();
//
// // 2. Конструктор
// var a = new abc();
//
// //3. Асинхронный вызов
// setTimeout(abc, 1000);
//
// //4. События


/**
 * задача
 * Есть квадратик.
 * Щелкнули 1 раз - поменялся цвет
 * 2 - скруглились углы
 * 3 - квадратик с градиентом
 * 4 - квадратику добавили тень
 * 5 - квадратик стал кругом
 * 6 и далее - ничего
 * Бонус:
 * щелчки по кругу
 */


var cntClick = 0;
var box = document.getElementById("box");
box.addEventListener("click", boxClick);



function generateColor() {
    return "#"+Math.floor(Math.random() * 16222715).toString(16);
}


function boxClick() {
    //console.log("Вы щелкнули по квадрату");
    //this.style.backgroundColor = generateColor();
    cntClick++;
    if (cntClick > 5) cntClick = 1;
    console.log(cntClick);

    if (cntClick == 1){
        this.style.background = generateColor();
    }
    if (cntClick == 2){
        this.style.borderRadius = "5px";
    }
    if (cntClick ==3){
        this.style.background = `linear-gradient(45deg, ${generateColor()}, ${generateColor()})`;
    }
    if (cntClick == 4){
        this.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 1.5)";
    }
    if (cntClick == 5){
        this.style.borderRadius = "50%";
    }

}

//hammer.js - для обработки на мобильных устройствах






















