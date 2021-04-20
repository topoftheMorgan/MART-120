var characterX = 470;
var characterY = 25;
// key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//floater
var shapeX = 150;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];
var diameters = [];


//click
var mouseShapeX;
var mouseShapeY;

var rectangleObject;
var rectangleObject2;
var rectangleObject3;

function setup()
    {
        createCanvas(500, 600);

        //object
        rectangleObject = new Rectangle(50, 125, 75, 50, 119, 74, 0)
        rectangleObject2 = new Rectangle(300, 500, 45, 95, 0, 74, 0)
        rectangleObject3 = new Rectangle(350, 250, 30, 50, 26, 110, 20)

        for (var i = 0; i < 50; i++) 
            {
                shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
                shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
                shapeXs[i] = getRandomNumber(350);
                shapeYs[i] = getRandomNumber(475);
            }
        createCharacter(200, 350);    
    }

function draw()
    {
        background(2, 128, 188);

        createBorders(5);

        rectangleObject.display();
        rectangleObject2.display();
        rectangleObject3.display();

        characterMovement();
        fill(228, 123, 15);
        ellipse(characterX,characterY,40,25);

        //floaters
        //fill(61, 71, 75)
        //circle(shapeX, shapeY, 20);
        
        fill(0)
        textSize(16);
        text("Finish", width-50,height-50)
        if(characterX > width & characterY > width-50)
        {
            fill(0);
            stroke(5);
            textSize(26);
            text("You Win!", width/2-50, height/2-50);
        }
        
        fill(61, 71, 75);
        //floater
        for (var i = 0; i < shapeXs.length; i++) 
        {
            circle(shapeXs[i], shapeYs[i], diameters[i]);
            shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            diameters[i] = getRandomNumber(50);

            shapeXs[i] += shapeXSpeeds[i];
            shapeYs[i] += shapeYSpeeds[i];
            //bounderies
            if (shapeXs[i] > width) 
            {
                shapeXs[i] = 0;
            }
            if (shapeXs[i] < 0) 
            {
                shapeXs[i] = width;
            }
            if (shapeYs[i] > height) 
            {
                shapeYs[i] = 0;
            }
            if (shapeYs[i] < 0) 
            {
                shapeYs[i] = height;
            }
        }
    }
    
function characterMovement()
    {
        // move keys
        if(keyIsDown(w))
        {
            characterY -= 5;   
        }
        if(keyIsDown(s))
        {
            characterY += 5;   
        }
        if(keyIsDown(a))
        {
            characterX -= 5;   
        }
        if(keyIsDown(d))
        {
            characterX += 5;   
        }
    }
    function createCharacter(x, y) 
    {
        characterX = x;
        characterY = y;
    }
function drawCharacter()
    {
        //fish
        fill(228, 123, 15);
        ellipse(characterX,characterY,40,25);
    }
function createBorders(thickness)
    {
        //outline
        //stroke(0);
        fill(0, 111, 74);

        rect(0,0,width,thickness);
        rect(0,0,thickness,height);
        rect(0, height-thickness,width, thickness);
        rect(width-thickness,0,thickness,height-50);
    } 
function createCircle()
    {  
        fill(120,130,140);
        circle(mouseShapeX, mouseShapeY, 25);
    }
function mouseClicked()
    {
        text("x: " + mouseShapeX + " y: " + mouseShapeY, mouseShapeX, mouseShapeY)
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
    function getRandomNumber(number) 
    {
        return Math.floor(Math.random() * number) + 10;
    }