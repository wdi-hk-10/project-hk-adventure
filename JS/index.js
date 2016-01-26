
// TO START THE GAME


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

var barScene = new Scene ({
  imageOne: $(".imageOne").attr("src", "./images/HK1.jpg"),
  imageTwo: $(".imageTwo").attr("src", "./images/14517.jpg"),
  question: $(".question").text("You are wasted after the Junk. Where do you go now?"),
  buttonOne: $(".buttonOne").text("LKF woohoo!!!"),
  buttonTwo: $(".buttonTwo").text("WanChai woohoo!!!"),
});


$(document).ready(function(){

  var currentScene = foodScene;
  $(".imageOne").attr("src", currentScene.imageOne);
  $(".imageTwo").attr("src", currentScene.imageTwo);
  $(".question").text(currentScene.question);
  $(".buttonOne").text(currentScene.buttonOne);
  $(".buttonTwo").text(currentScene.buttonTwo);
});



// // Linking the scenes
// foodScene.option1 = junkScene;
// foodScene.option2 = barScene;
//  var currentScene = foodScene;
//   // display stuff from the scene

// });













// var foodScene = new Scene ({
//   imageOne: $(".imageOne").attr("src", "./images/14517.jpg"),
//   imageTwo: $(".imageTwo").attr("src", "./images/14517.jpg"),
//   question: $(".question").text("Time to Eat. Where will you go?"),
//   buttonOne: $(".buttonOne").text("Dim Sum!!!"),
//   buttonTwo: $(".buttonTwo").text("Swanky Bar!!!")
// });

// var junkScene = new Scene ({
//   imageOne: $(".imageOne").attr("src", "./images/HK1.jpg"),
//   imageTwo: $(".imageTwo").attr("src", "./images/HK2.jpg"),
//   question: $(".question").text("Now you're full on carbs. Want to go on a Junk or Foot massage?"),
//   buttonOne: $(".buttonOne").text("JUNK TIME!!!"),
//   buttonTwo: $(".buttonTwo").text("FOOT MASSAGE!!!"),
// });