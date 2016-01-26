
// FUNCTIONS
  var Scene = function(option) {
    this.imageOne = option.imageOne;
    this.imageTwo = option.imageTwo;
    this.question = option.question;
    this.buttonOne = option.buttonOne;
    this.buttonTwo = option.buttonTwo;
    this.option1 = null;
    this.option2 = null;
  };



// DIFFERENT SCENES
var foodScene = new Scene({
  imageOne: "./images/dimsum.jpg",
  imageTwo: "./images/fancybar2.jpg",
  question: "It's 12pm. Time to Eat. Where do you go?",
  buttonOne: "Dim Sum!!!",
  buttonTwo: "Swanky Restaurant"
});

var carbOverloadScene = new Scene({
  imageOne: "./images/junk.jpg",
  imageTwo: "./images/footMassage.jpg",
  question: "Now you're full on carbs. Your friend has let you know their Junk boat is picking up more passengers at Central Pier. Do you get on the junk  - or would you prefer to have a Foot massage?",
  buttonOne: "Junk party!!!",
  buttonTwo: "Foot Massage"
});

var foodPoisoningScene = new Scene({
  imageOne: "./images/hkTaxi.jpg",
  imageTwo: "./images/hkMtr.jpg",
  question: "The swanky restaurant in Central gave you food poisoning and you feel ill immediately. You need to get to the hospital ASAP - how do you travel?",
  buttonOne: "Hong Kong taxi",
  buttonTwo: "MTR and then walk (run)"
});

var junkScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/fancybar.jpg",
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

  foodScene.option1 = junkScene;
  foodScene.option2 = barScene;
  junkScene.option1 = barScene;
  junkScene.option2 = foodScene;

  $(".buttonOne").on("click", function(){
    currentScene = foodScene.option1;
    setCurrentScene();
  });

  $(".buttonTwo").on("click", function(){
    currentScene = foodScene.option2;
    setCurrentScene();
  });

  $(".buttonOne").on("click", function(){
    currentScene = junkScene.option1;
    setCurrentScene();
  });

   $(".buttonTwo").on("click", function(){
    currentScene = junkScene.option1;
    setCurrentScene();
  });

// -----

//
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











