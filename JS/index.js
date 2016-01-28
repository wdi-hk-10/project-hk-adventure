// TO START THE GAME
$(document).ready(function(){

  // $('.headingPicTwo').fadeTo( "slow" , 0.0, function() {

  var blink = function () {
    $(".headingPicTwo").delay(500).fadeTo(100,0.0).delay(100).fadeTo(100,1, blink);
  }

  var lanternEntrance = function () {
    $(".rightLantern").animate({right: '110px'});
    $(".leftLantern").animate({left: '130px'});
  }

  var setCurrentScene = function() {
    $(".imageOne").attr("src", currentScene.imageOne);
    $(".imageTwo").attr("src", currentScene.imageTwo);
    $(".question").text(currentScene.question);
    $(".buttonOne").text(currentScene.buttonOne);
    $(".buttonTwo").text(currentScene.buttonTwo);
  }

  var currentScene = foodScene;
  var $mainSection = $('.mainSection');
  var $gameOverSection = $('.gameOverSection');

  var bindButtonOne = function () {
    $(".buttonOne").on("click", function(){
      if (currentScene.audioOne) { currentScene.audioOne.play() };
      currentScene = currentScene.option1;
      if (currentScene.end) {
        $mainSection.hide()
        $gameOverSection.show();
      } else {
        setCurrentScene();
      }
    });
  }

  var bindButtonTwo = function () {
    $(".buttonTwo").on("click", function(){
      if (currentScene.audioTwo) { currentScene.audioTwo.play() };
      currentScene = currentScene.option2;
      if (currentScene.end) {
        $mainSection.hide()
        $gameOverSection.show();
      } else {
        setCurrentScene();
      }
    });
  }

  var bindButtonThree = function () {
    $(".buttonThree").on("click", function(){
      currentScene = foodScene;
      setCurrentScene();
    });
  }

  var init = function () {
    blink();
    lanternEntrance();
    setCurrentScene();
    bindButtonOne();
    bindButtonTwo();
    bindButtonThree();
  }

  init();

//DON'T DELETE THE BELOW
});
