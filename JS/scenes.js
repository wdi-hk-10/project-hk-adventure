// FUNCTIONS
var Scene = function(option) {
  this.imageOne = option.imageOne;
  this.imageTwo = option.imageTwo;
  this.question = option.question;
  this.buttonOne = option.buttonOne;
  this.buttonTwo = option.buttonTwo;
  this.option1 = null;
  this.option2 = null;
  this.audioOne = option.audioOne ? new buzz.sound(option.audioOne): null;
  this.end = option.end || false;
};

// DIFFERENT SCENES
var foodScene = new Scene({
  imageOne: "./images/dimsum.jpg",
  imageTwo: "./images/fancybar2.jpg",
  question: "It's 12pm. Time to Eat. Where do you go?",
  buttonOne: "Dim Sum!!!",
  buttonTwo: "Swanky Restaurant",
  audioOne: "./images/chat.mp3"
});

var carbOverloadScene = new Scene({
  imageOne: "./images/junk.jpg",
  imageTwo: "./images/footMassage.jpg",
  question: "Now you're full on carbs. Your friend has let you know their Junk boat is picking up more passengers at Central Pier. Do you get on the junk  - or would you prefer to have a Foot massage?",
  buttonOne: "Junk party!!!",
  buttonTwo: "Foot Massage"
});

var foodPoisonScene = new Scene({
  imageOne: "./images/hkTaxi.jpg",
  imageTwo: "./images/hkMtr.jpeg",
  question: "The swanky restaurant in Central gave you food poisoning and you feel ill immediately. You need to get to the hospital ASAP - how do you travel?",
  buttonOne: "Hong Kong taxi",
  buttonTwo: "MTR and then walk (run)"
});

var afterJunkScene = new Scene({
  imageOne: "./images/LKF.jpg",
  imageTwo: "./images/wanChai.jpg",
  question: "The junk dropped you off at central pier where you continued to drink until 10pm. You are now wasted. Where would you like to go?",
  buttonOne: "LKF woohoo!!!",
  buttonTwo: "WanChai woohoo!!!"
});

var afterFootScene = new Scene({
  imageOne: "./images/LKF.jpg",
  imageTwo: "./images/wanChai.jpg",
  question: "After the foot massage, you decided to get a 3 hour body massage. You are now ready to party - where do you go?",
  buttonOne: "LKF woohoo!!!",
  buttonTwo: "WanChai woohoo!!!"
});

var hospitalScene = new Scene({
  imageOne: "./images/happyValley.jpg",
  imageTwo: "./images/macau.jpg",
  question: "You get to the hospital in time. Doc gives you 7 drugs for each symptom. You miraculously feel better and feel super lucky. Where do you go to gamble with friends?",
  buttonOne: "Happy Valley races",
  buttonTwo: "Macau"
});

var lkfScene = new Scene({
  imageOne: "./images/7-11.jpg",
  imageTwo: "./images/dragoni.jpg",
  question: "You are now in LKF. Where do you drink?",
  buttonOne: "7 Eleven all the way!!!",
  buttonTwo: "Dragon I!"
});

var wanChaiScene = new Scene({
  imageOne: "./images/karaoke.jpg",
  imageTwo: "./images/drink.jpg",
  question: "You are now in Wanchai. What do you want to do?",
  buttonOne: "Karaoke!!!",
  buttonTwo: "Drink!!!"
});

var happyValleyScene = new Scene({
  imageOne: "./images/corporate.jpeg",
  imageTwo: "./images/crazyCrowd.jpg",
  question: "You have arrived at Happy Valley. Where do you go to watch the races?",
  buttonOne: "Corporate box",
  buttonTwo: "With the crazy crowd"
});

var crazyCrowdScene = new Scene({
  imageOne: "./images/vader.jpg",
  imageTwo: "./images/batGirl.jpg",
  question: "You're in the crowd and it's fancy dress all the way. Who do you party with?",
  buttonOne: "Darth Vader",
  buttonTwo: "Bat girl"
});

var macauScene = new Scene({
  imageOne: "./images/ferry.jpg",
  imageTwo: "./images/helicopter.png",
  question: "Wow it's off to Macau huh? How will you travel with your friends?",
  buttonOne: "Ferry",
  buttonTwo: "Helicopter VIP all the way"
});

var end1Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/tHlOuVV6adMkM.gif",
  question: "You pass out in the gutter. After waking up you grab a burrito and stumble home at 7am. Hungover for days. Well done.",
  buttonOne: "",
  buttonTwo: "",
  end: true
});

var end2Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/qAY88sMHhEPnO.gif",
  question: "You bump into Usher in dragonI and dance it up.",
  buttonOne: "",
  buttonTwo: "",
  end: true
});

var end3Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/TMu8bS0hQxCX6.gif",
  question: "You nailed the latest Justin Bieber song. Went home a hero - well done.",
  buttonOne: "",
  buttonTwo: ""
});

var end4Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/phsUpW8VbXgRO.gif",
  question: "In a case of mistaken identiy,a HK triad gang storms the bar. You drunkenly fight them off, and they all go home crying to their mother.",
  buttonOne: "",
  buttonTwo: ""
});

var end5Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/Achrz20r7S7Di.gif",
  question: "You have a boring night out with boring people in suits. You wish you were out with the crowd having fun. Bad move - go home and sulk.",
  buttonOne: "",
  buttonTwo: ""
});

var end6Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/Vj9poc6x6zg8E.gif",
  question: "Turns out Vader can kick it. You have the best night of your life.",
  buttonOne: "",
  buttonTwo: ""
});

var end7Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/599WsrtJIj2b6.gif",
  question: "Bat girl turns out to be one of the most notorious con- artists in Hong Kong. You lose your wallet, phone, watch, clothes and dignity.",
  buttonOne: "",
  buttonTwo: ""
});

var end8Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/AYKv7lXcZSJig.gif",
  question: "Your friends can't believe you chose the ferry and ditch you for the helicopter. You go to buy a ferry ticket only to be told they're all sold out. It then starts to rain. Go home and sulk that you chose a bad option.",
  buttonOne: "",
  buttonTwo: ""
});

var end9Scene = new Scene({
  imageOne: "./images/gameOver.jpg",
  imageTwo: "http://i.giphy.com/l3nWmPFBffbkCd3Ow.gif",
  question: "You win at everything. Pay for a night at the penthouse suite at the Wynn and have the Best. Night. Ever.",
  buttonOne: "",
  buttonTwo: ""
});


// MAPPING THE GAME
foodScene.option1 = carbOverloadScene;
foodScene.option2 = foodPoisonScene;
carbOverloadScene.option1 = afterJunkScene;
carbOverloadScene.option2 = afterFootScene;
foodPoisonScene.option1 = hospitalScene;
foodPoisonScene.option2 = hospitalScene;
afterJunkScene.option1 = lkfScene;
afterJunkScene.option2 = wanChaiScene;
afterFootScene.option1 = lkfScene;
afterFootScene.option2 = wanChaiScene;
hospitalScene.option1 = happyValleyScene;
hospitalScene.option2 = macauScene;
happyValleyScene.option2 = crazyCrowdScene;
lkfScene.option1 = end1Scene;
lkfScene.option2 = end2Scene;
wanChaiScene.option1 = end3Scene;
wanChaiScene.option2 = end4Scene;
happyValleyScene.option1 = end5Scene;
crazyCrowdScene.option1 = end6Scene;
crazyCrowdScene.option2 = end7Scene;
macauScene.option1 = end8Scene;
macauScene.option2 = end9Scene;