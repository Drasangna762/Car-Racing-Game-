var hypnoticBall, database;
var position;
var form1, player, game;
var playerCount, gameState = 0 


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game = new Game()
  game.getState()
  game.start()

  
}

function draw(){
  background("white");
  

  
}
