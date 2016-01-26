
// FUNCTIONS
  var Scene = function(option) {
    this.imageOne = option.imageOne;
    this.imageTne = option.imageTwo;
    this.question = option.question;
    this.buttonOne = option.buttonOne;
    this.buttonTwo = option.buttonTwo;
    this.option1 = null;
    this.option2 = null;
  };



// DIFFERENT SCENES
var foodScene = new Scene({
  imageOne: "./images/14517.jpg",
  imageTwo: "./images/14517.jpg",
  question: "Time to Eat. Where will you go?",
  buttonOne: "Dim Sum!!!",
  buttonTwo: "Swanky Bar!!!"
});

var junkScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/HK2.jpg",
  question: "Now you're full on carbs. Want to go on a Junk or Foot massage?",
  buttonOne: "Junk time!!!",
  buttonTwo: "Foot Massage!!!"
});

var barScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/14517.jpg",
  question: "You are wasted after the Junk. Where do you go now?",
  buttonOne: "LKF woohoo!!!",
  buttonTwo: "WanChai woohoo!!!",
});


// TO START THE GAME
$(document).ready(function(){

  var setCurrentScene = function() {
    $(".imageOne").attr("src", currentScene.imageOne);
    $(".imageTwo").attr("src", currentScene.imageTwo);
    $(".question").text(currentScene.question);
    $(".buttonOne").text(currentScene.buttonOne);
    $(".buttonTwo").text(currentScene.buttonTwo);
  }

  var currentScene = foodScene;

  setCurrentScene();


  var option1 = function() {
    this.option1 = currentScene;
  }

  // currentScene = junkScene;
  // setCurrentScene();

  // $(".buttonOne").on("click", function(){
  //   option1();
  //   setCurrentScene();
  // });

// -----

// foodScene.option1 = junkScene;
// foodScene.option2 = barScene;
// currentSceneFn();
//   // display stuff from the scene

  // var currentScene = junkScene;
  //

// var currentScene = barScene
// currentSceneFn();


// // Linking the scenes
// foodScene.option1 = junkScene;
// foodScene.option2 = barScene;
//  var currentScene = foodScene;
//   // display stuff from the scene

  // $(".buttonOne").on("click", function(){
  //   var currentScene = junkScene;

  //   currentSceneFn();
  // }
  // $(".buttonTwo").on("click", function(){
  //   var currentScene = barScene;
  //   currentSceneFn();
  // }
//DON'T DELETE THE BELOW
});











