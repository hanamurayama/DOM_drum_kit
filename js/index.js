
//Detecting button event

//#s of drum buttons to specify when to stop for loop
var numDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numDrumButtons; i++){

  document.querySelectorAll("button")[i].addEventListener("click", function(){
    //new var for the letter inside each button for the switch
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    //key that is pressed & corresponds with switch statement's cases

    animateButton(buttonInnerHTML); //animate the current key

  });

}

//Detecting eyboard event

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  //key is property of keydown, key tells which key value is pressed

  animateButton(event.key); //animate the current key

});

//Function to call audio event and keyboard event

function makeSound(key){
  switch (key) {

    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;

    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "j":
      var audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
      break;

    case "k":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;

    case "l":
      var audio7 = new Audio("sounds/snare.mp3");
      audio7.play();
      break;


    default: console.log(key);

  }

}


//Animate button when users click/type key
function animateButton(currKey){
  var activeButton = document.querySelector("." + currKey);
  //this will create button classe, "w", "a", "s", "d", "j", "k", "l"

  activeButton.classList.add("pressed"); //apply pressed style in class

  //setTimeout(function, millisecond)
  //remove the style after 1 sec
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
