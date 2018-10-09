/**
 * Created by zm on 07.09.2018.
 */
window.addEventListener("DOMContentLoaded", init);

var blacpanel,
    images;

function closeLightBox() {
    //blacpanel.removeChild(bigImage);
    blacpanel.innerHTML="";
    blacpanel.style.display = "none";
    blacpanel.removeEventListener("click", closeLightBox);
}

function init() {

    blacpanel = document.getElementById("blackpanel");
    blacpanel.addEventListener("click", closeLightBox);

    images = document.getElementsByClassName("my-image");

    console.log(images);

    for (var i = 0; i < images.length; i++){
        images[i].addEventListener("click", function () {
            blacpanel.style.display = "flex";
            console.log(this.src);

            var bigImage = document.createElement("img");
            bigImage.src = this.src;
            bigImage.style.width = "70vw";
            bigImage.style.margin = "auto";
            bigImage.style.borderRadius = "3px";
            blacpanel.appendChild(bigImage);


        });
    }

}