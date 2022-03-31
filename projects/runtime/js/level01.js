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
            //level 1 Sawblade
            {"type": "sawblade", "x": 726, "y": groundY - 120},
            {"type": "sawblade", "x": 1100, "y": groundY - 30},
            {"type": "sawblade", "x": 1300, "y": groundY - 30},
            {"type": "sawblade", "x": 1514, "y": groundY - 120},
            {"type": "sawblade", "x": 1850, "y": groundY - 40},
            
            //level 2 Sawblade
            {"type": "sawblade", "x": 2336, "y": groundY - 30},
            {"type": "sawblade", "x": 2510, "y": groundY - 120},
            {"type": "sawblade", "x": 2620, "y": groundY - 120},
            {"type": "sawblade", "x": 2914, "y": groundY - 30},
            {"type": "sawblade", "x": 3120, "y": groundY - 120},
            {"type": "sawblade", "x": 3314, "y": groundY - 30},
            {"type": "sawblade", "x": 3550, "y": groundY - 40},
           
            //level 3 Sawblade
            {"type": "sawblade", "x": 4346, "y": groundY - 30},
            {"type": "sawblade", "x": 4610, "y": groundY - 120},
            {"type": "sawblade", "x": 4720, "y": groundY - 120},
            {"type": "sawblade", "x": 5014, "y": groundY - 30},
            {"type": "sawblade", "x": 5314, "y": groundY - 30},
            {"type": "sawblade", "x": 5550, "y": groundY - 120},
            {"type": "sawblade", "x": 5714, "y": groundY - 40},

            //level 4 Sawblade
            {"type": "sawblade", "x": 6246, "y": groundY - 120},
            {"type": "sawblade", "x": 6510, "y": groundY - 40},
            {"type": "sawblade", "x": 6820, "y": groundY - 40},
            {"type": "sawblade", "x": 7014, "y": groundY - 120},
            {"type": "sawblade", "x": 7314, "y": groundY - 30},
            {"type": "sawblade", "x": 7550, "y": groundY - 120},
            {"type": "sawblade", "x": 7764, "y": groundY - 40},

            //level 5 Sawblade
            {"type": "sawblade", "x": 8246, "y": groundY - 120},
            {"type": "sawblade", "x": 8510, "y": groundY - 40},
            {"type": "sawblade", "x": 8820, "y": groundY - 40},
            {"type": "sawblade", "x": 9014, "y": groundY - 120},
            {"type": "sawblade", "x": 9314, "y": groundY - 30},
            {"type": "sawblade", "x": 9550, "y": groundY - 120},
            {"type": "sawblade", "x": 9764, "y": groundY - 40},
            
            //level 1 Enemy
            { "type": "enemy", "x": 890, "y": groundY - 60 },
            { "type": "enemy", "x": 1690, "y": groundY - 60 },

            //level 2 Enemy
            { "type": "enemy", "x": 2750, "y": groundY - 50 },

            //level 3 Enemy
            { "type": "enemy", "x": 4650, "y": groundY - 50 },
            { "type": "enemy", "x": 4850, "y": groundY - 50 },

           //level 2 Spikes
            {"type": "spikes", "x": 3820, "y": groundY - 20},
            //level 3 Spikes
            {"type": "spikes", "x": 5920, "y": groundY - 20},
            //level 4 Spikes
            {"type": "spikes", "x": 7920, "y": groundY - 20},

            //level 1 Reward
            { "type": "reward", "x": 2100, "y": groundY - 50 },
            //level 2 Reward
            { "type": "reward", "x": 4100, "y": groundY - 50 },
            //level 3 Reward 
            { "type": "reward", "x": 6100, "y": groundY - 50 },
            //level 4 Reward
            { "type": "reward", "x": 8100, "y": groundY - 50 },
            //level 5 Reward
            { "type": "reward", "x": 10000, "y": groundY - 50 },
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
            sawBladeHitZone.rotationalVelocity = 10; // rotate the enemy image by 10 pixels
        }

        function createSpikes(x,y){
            var hitZoneSize = 25; //creates the size of the hitzone
            var damageFromObstacle = 5; //setting how much damage the obstacle causes on impact
            var spikesHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle itself
            spikesHitZone.x = x; //the x value of the hitzone
            spikesHitZone.y = y; //the y value of the hitzone
            game.addGameItem(spikesHitZone); //adds the hitzone to the game   
        
            var obstacleImage = draw.bitmap('img/pixel-spikes.png'); //draws the image and stores it in the variable obstacleImage
            spikesHitZone.addChild(obstacleImage); //adds the image to the hitzone so you can see it.
            obstacleImage.x = -110; //lines up the x of the image with the hitzone
            obstacleImage.y = -70; //lines up the y of the image with the hitzone
        }


        function createEnemy(x, y){
            var enemy = game.createGameItem('enemy',25);// creates the enemy game item and stores it in the variable enemy
            var enemyImage = draw.bitmap('img/shuriken.png'); // draws the image and stores it in the variable enemyImage
            enemyImage.x = -25; // align the image with the hitzone x
            enemyImage.y = -25; // align the image with the hitzone y
            enemy.addChild(enemyImage); // adds the enemy 
            enemy.x = x; //the x value of the enemy 
            enemy.y = y; //the x value of the enemy 
            game.addGameItem(enemy); // adds the enemy
            enemy.velocityX = -2; // move the enemy 1 pixel to the left
            enemy.rotationalVelocity = 10; // rotate the enemy image by 10 pixels

            //this function detects if the enemy collides with Halle and executes health decrease
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(15); //decreases your health
                console.log('The enemy has hit Halle');
                enemy.shrink(); //when hits Halle enemy disapears or shrinks
            };
            //this function detects if the projectile collides with Halle and it will increase the score and shrink the enemy
            enemy.onProjectileCollision = function(){
                game.increaseScore(20) //increases the score when enemy detroyed 
                enemy.shrink(); //how enemy is destroyed
            };
        };
        
        function createReward(x, y){
            var reward = game.createGameItem('reward',25);// creates the reward game item and stores it in the variable reward
            var rewardImage = draw.bitmap('img/pixel-heart.png'); //draws the image and stores it in the variable rewardImage
            rewardImage.x = -25; //the x value of the reward
            rewardImage.y = -25; //the y value of the reward
            reward.addChild(rewardImage); // adds the reward 
            reward.x = x; //the x value of the reward 
            reward.y = y; //the x value of the reward 
            game.addGameItem(reward); // adds the reward
            reward.velocityX = -2; // move the reward 1 pixel to the left

            //this function detects if the reward collides with Halle and executes health decrease
            reward.onPlayerCollision = function() {
                game.changeIntegrity(100); //increases your health
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
            if (gameItem.type === "spikes"){
                createSpikes(gameItem.x, gameItem.y);
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
