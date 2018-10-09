// window.addEventListener("DOMContentLoaded", init);
//
// function SuperButton(tuzik) {
//     // that сохраняет контекст. Указатель на объект кнопки
//     var that  = this;
//     this.name = tuzik;
//     this.show = function () {
//         document.body.appendChild(this.buttonElement);
//     }
//
//     this.attachEvents_ = function () {
//         this.buttonElement.addEventListener("click", this.buttonClick_ );
//     }
//
//     this.buttonClick_ = function () {
//         console.log(that.name);
//         console.log(this, that);
//     }
//
//     // _ говорит нам, что эта функция используется
//     // только внутри конструктора
//     this.init_ = function () {
//         this.buttonElement = document.createElement("div");
//         this.buttonElement.className = "abc-button"; // css - класс
//         var textNode = document.createTextNode(this.name);
//         this.buttonElement.appendChild(textNode);
//
//         //подпишемся на событие
//         this.attachEvents_();
//     }
//     this.init_();
// }
//
// function range(n) {
//     array = new Array();
//     for (var i = 1; i <= n; i++){
//         array.push(i);
//     }
//     return array;
//  }
//
// function init() {
//     // var button = new SuperButton("Кнопка");
//     // button.show();
//
//
//     range(1500).filter(x => x%2 == 1).map(function (x) {
//         var button = new SuperButton(x);
//         button.show();
//     });
//
//
//
//
// }
//
