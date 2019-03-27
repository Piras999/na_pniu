document.addEventListener("DOMContentLoaded", function(event){
console.log("about");

    aboutText();

    function aboutText(){
        $(".tapDivSimon").click(function(){
            $(".simonP").slideToggle("slow");
            $(".tapDivSimon").toggleClass("after")
        }); 

        $(".tapDivPeter").click(function(){
            $(".peterP").slideToggle("slow");
            $(".tapDivPeter").toggleClass("after")
        });
    }

})

