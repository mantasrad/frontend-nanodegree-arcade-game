// Enemies our player must avoid

var Enemy = function(x, y) {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y

    this.bugMoves = function (min, max) {
        return Math.random() * (max - min) + min;
      };
      const possibleY = [50,135,220];
      this.positionY = possibleY[Math.floor(Math.random() * possibleY.length)];
this.velocity = this.bugMoves(50,300);


};


var Player = function(x,y) {
  this.sprite = 'images/char-boy.png'
  this.x = x;
  this.y = y;

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
this.x += this.velocity * dt;
//movement
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.positionY);
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //console.log('updatePlayer');
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(){

    if(this.x !== 0 && event.keyCode == 37) {
        this.x -= 100;
    }
    else if(this.y !== (-25) && event.keyCode == 38) {
      this.y -= 85;
    }
    else if(this.x !== 400 && event.keyCode == 39){
      this.x += 100;
    }
    else if(this.y !== 400 && event.keyCode == 40){
      this.y += 85;
    }
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
allEnemies.push(new Enemy(-100, this.positionY));


setInterval(function(){
   allEnemies.push(new Enemy(-100, this.positionY));
 }, 2000);
let player = new Player(200,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
