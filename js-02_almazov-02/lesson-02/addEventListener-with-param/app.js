window.addEventListener("DOMContentLoaded", init);

function init() {
    var button = document.getElementById("abc-button");
    button.addEventListener("click", function () {
        buttonClick("Кеша");
    })
}

function buttonClick(name) {
    console.log(name);
}