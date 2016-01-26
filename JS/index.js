var Scene = function(option) {
  this.imageOne = option.imageOne;
  this.imageTne = option.imageTwo;
  this.question = option.question;
  this.buttonOne = option.buttonOne;
  this.buttonTwo = option.buttonTwo;
}

var foodScene = new Scene ({
  imageOne: "../images/14517.jpg",
  imageTwo: "../images/hongkong2.jpg",
  question: $(".question").text("Time to Party. Where will you go?"),
  buttonOne: $(".buttonOne").text("LKF woohoo!!!"),
  buttonTwo: $(".buttonTwo").text("WanChai woohoo!!!"),
});


