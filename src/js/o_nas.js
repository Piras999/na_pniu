document.addEventListener("DOMContentLoaded", function(event){
console.log("about");

    aboutText();

    function aboutText(){
        const aboutTextHiddenSimon = document.querySelector(".aboutTextSimon-hidden");
        const aboutTextHiddenPeter = document.querySelector(".aboutTextPeter-hidden");
        const aboutPhotoSimon = document.querySelector(".aboutPhotoSimon-show")
        const aboutPhotoPeter = document.querySelector(".aboutPhotoPeter-show")
        const simonIMG = document.querySelector(".simonImg");
        const peterIMG = document.querySelector(".peterImg");
        const simonP = document.querySelector(".simonP");
        const peterP = document.querySelector(".peterP");


        simonIMG.addEventListener("click", function(){
            aboutTextHiddenSimon.classList.toggle("show")
            aboutPhotoSimon.classList.toggle("hidden")
        });

        simonP.addEventListener("click", function(){

            aboutTextHiddenSimon.classList.remove("show");
            aboutPhotoSimon.classList.remove("hidden");
        });

        peterIMG.addEventListener("click", function(){
            aboutTextHiddenPeter.classList.toggle("show")
            aboutPhotoPeter.classList.toggle("hidden")
        });

        peterP.addEventListener("click", function(){

            aboutTextHiddenPeter.classList.remove("show");
            aboutPhotoPeter.classList.remove("hidden");
        });
    }
})

