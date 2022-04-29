// document.querySelector("button").addEventListener("click",function(){
//     alert("im pressed");
// });

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // this.style.color = "white";
        // var aud = new Audio("sounds/tom-1.mp3");
        // aud.play();
        var word = this.innerHTML;
        // console.log(event);   // event  bta ta h ki konsa event trigger huha
        check(word);
        buttonAnimation(word);
    });

}

document.addEventListener("keydown", function(event) {
    // console.log(event);
    check(event.key);
    buttonAnimation(event.key);
});

function check(word) {
    switch (word) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom3 = new Audio("sounds/tom-4.mp3");
            tom3.play();
            break;
        default:
            console.log(word);
    }
}

// function handleClick(){ isko seedha event listner m daal dete h annonymus fnction bn jaega(bina naam ka)
//     alert("im pressed");
// }

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },500);
}
