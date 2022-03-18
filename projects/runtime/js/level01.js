var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Deserted City",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 50 },
                { "type": "sawblade", "x": 600, "y": groundY - 50},
                { "type": "sawblade", "x": 800, "y": groundY - 50},

                { "type": "enemy", "x": 500, "y": groundY - 50 },
                { "type": "enemy", "x": 700, "y": groundY - 50},
                { "type": "enemy", "x": 900, "y": groundY - 50},

                { "type": "reward", "x": 200, "y": groundY - 50 },
                { "type": "reward", "x": 300, "y": groundY - 50},
                { "type": "reward", "x": 1000, "y": groundY - 50},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x,y){
            var hitZoneSize = 25; //creates the size of the hitzone
            var damageFromObstacle = 15; //setting how much damage the obstacle causes on impact
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle itself
            sawBladeHitZone.x = x; //the x value of the hitzone
            sawBladeHitZone.y = y; //the y value of the hitzone
            game.addGameItem(sawBladeHitZone); //adds the hitzone to the game   
        
            var obstacleImage = draw.bitmap('img/Kunai Knife.png'); //draws the image and stores it in the variable obstacleImage
            sawBladeHitZone.addChild(obstacleImage); //adds the image to the hitzone so you can see it.
            obstacleImage.x = -25; //lines up the x of the image with the hitzone
            obstacleImage.y = -25; //lines up the y of the image with the hitzone
            sawBladeHitZone.rotationalVelocity = 10;
        }


        function createEnemy(x, y){
            var enemy = game.createGameItem('enemy',25);// creates the enemy game item and stores it in the variable enemy
            var redSquare = draw.rect(50,50,'red'); // draws a red sqaure and stores it in variable redSquare
            redSquare.x = -25; // align the square with the hitzone x
            redSquare.y = -25; // align the square with the hitzone y
            enemy.addChild(redSquare); // adds the enemy 
            enemy.x = x; //the x value of the enemy 
            enemy.y = y; //the x value of the enemy 
            game.addGameItem(enemy); // adds the enemy
            enemy.velocityX = -1; // move the enemy 1 pixel to the left
            enemy.rotationalVelocity = 10; // rotate the enemy image by 10 pixels

            //this function detects if the enemy collides with Halle and executes health decrease
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10); //decreases your health
                console.log('The enemy has hit Halle');
                enemy.shrink(); //when hits Halle enemy disapears or shrinks
            };
            //this function detects if the projectile collides with Halle and it will increase the score and shrink the enemy
            enemy.onProjectileCollision = function(){
                game.increaseScore(10) //increases the score when enemy detroyed 
                enemy.shrink(); //how enemy is destroyed
            };
        };
        
        function createReward(x, y){
            var reward = game.createGameItem('reward',25);// creates the reward game item and stores it in the variable reward
            var blueSquare = draw.rect(50,50,'blue'); // draws a blue sqaure and stores it in variable blueSquare
            blueSquare.x = -25; // align the square with the hitzone x
            blueSquare.y = -25; // align the square with the hitzone y
            reward.addChild(blueSquare); // adds the reward 
            reward.x = x; //the x value of the reward 
            reward.y = y; //the x value of the reward 
            game.addGameItem(reward); // adds the reward
            reward.velocityX = -1; // move the reward 1 pixel to the left
            reward.rotationalVelocity = 10; // rotate the reward image by 10 pixels

            //this function detects if the reward collides with Halle and executes health decrease
            reward.onPlayerCollision = function() {
                game.changeIntegrity(10); //decreases your health
                console.log('The reward has hit Halle');
                reward.shrink(); //when hits Halle reward disapears or shrinks
            };
            //this function detects if the projectile collides with Halle and it will increase the score and shrink the reward
            reward.onProjectileCollision = function(){
                game.increaseScore(10) //increases the score when reward detroyed 
                reward.shrink(); //how reward is destroyed
            };
        };


        for (var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];
            
            if (gameItem.type === "sawblade"){
                createSawBlade(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y);
            }
            if (gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
            }
        }


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
