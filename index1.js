// alert("hi")
var eyeButton = document.querySelectorAll(".eye");
var ross = document.querySelector("#ross");
for (var i = 0; i < eyeButton.length; i++) {
    eyeButton[i].addEventListener("click", function () {
        if (ross.style.visibility == "visible") {
            ross.style.visibility = "hidden";
        }
        else {
            ross.style.visibility = "visible";
        }

    })
}
ross.addEventListener("mouseover", function(){
    ross.style.visibility = "hidden";
    var pDetal = document.querySelector("#detal");
    pDetal.innerHTML = "B$DK...Don't touch her...<br><br>Now touch my seducing lips to see who i am";
})