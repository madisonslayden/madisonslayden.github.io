var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#FFA490'); //creates a variable called backgroundFill and stores a rectangle that acts as our background
            background.addChild(backgroundFill); //adds the background to the cavas so we can see it
            
            // TODO: 3 - Add a moon and starfield
           
            var moon = draw.bitmap('img/moon.png'); //a variable moon that hold the bitmap drawing of the moon
            moon.x = canvasWidth - 300; //holds the x value (left to right) 
            moon.y = groundY - 450; //holds the y value (up and down)
            moon.scaleX = 0.5; //changes the x scale of the moon
            moon.scaleY = 0.5; //changes the y scale of the moon
            background.addChild(moon); //adds the moon to the background
            
            // everytime the loops runs it craets a circle with a random x and y respective to the canvas and is added to the background
            for (var i =0; i <= 100; i++ ){
                var circle = draw.circle(3,'white','LightGray',2); //creates a variable called circle that holds each circle
                circle.x = canvasWidth*Math.random(); //multiplies cavasWidth * a random decimal between .1 and .99 and assigns it the circle.x
                circle.y = groundY*Math.random(); //multiplies groundY * with a random decimal between .1 and .99 and assigns it the circle.y
                background.addChild(circle); //adds the circle to the background
            }
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            // this is before TODO 4 because the buildings are in the background
             //everytime this loop runs, it creates a building with an x and y value and pushes it to the buildings array
            for(var i = 0; i < 10; i++) {
                var buildingHeights = [300, 200, 100, 400, 350];
                var colors = ["red", "blue", "grey", "black", "purple"]
                var buildingHeight = 300; //declare a variable called buildingHeight that holds the height of the building in pixels
                var building = draw.rect(75, buildingHeights[i],colors[i],'Black',1); //declares a variable called building which will hold each building
                building.x = 500 + 200*i; //adds 200 pixels to the x value every time the loop runs
                building.y = groundY-buildingHeights[i]; //sets the building y position by subtracting the height of the building from groundY
                background.addChild(building); //adds the building to the background so we can see it
                buildings.push(building); //push the building data to the buildings aray and store it as an index
            }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png');
            tree.x = canvasWidth - 300;
            tree.y = groundY - 235;
            background.addChild(tree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree

            tree.x = tree.x - 1; //takes the current value of tree.xand subtractys 1 pixel 60/seconds to move the tree to the left
            //if the tree's x value is less than -200 pizels then reassign canvasWidth to the tree's x position
            if(tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++){
                buildings[i].x = buildings[i].x - 2;
                if(buildings[i].x < 0) {
                    buildings[i].x = canvasWidth;
                }
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
