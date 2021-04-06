var characterX = 470;
var characterY = 25;
// key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//floater(small) 1
var shapeX = 150;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
//floater(medium) 2
var shapeXX = 300;
var shapeYY = 50;
var shapeXXSpeed;
var shapeYYSpeed;
//floater(large) 3
var shapeXXX = 0;
var shapeYYY = 50;
var shapeXXXSpeed;
var shapeYYYSpeed;

//click
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(2, 128, 188);

    createBorders(5);

    characterMovement();
    fill(228, 123, 15);
    ellipse(characterX,characterY,40,25);

    //floaters
    fill(61, 71, 75)
    circle(shapeX, shapeY, 5);
    fill(143, 111, 74)
    circle(shapeXX, shapeYY, 10);
    fill(51, 74, 53)
    circle(shapeXXX, shapeYYY, 15);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    shapeXXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXX += shapeXXSpeed
    shapeYY += shapeYYSpeed
    if(shapeXX > width)
    {
        shapeXX = 0;
    }
    if(shapeXX < 0)
    {
        shapeXX = width;
    }
    if(shapeYY > height)
    {
        shapeYY = 0;
    }
    if(shapeYY < 0)
    {
        shapeYY = height;
    }
    shapeXXXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYYYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXXX += shapeXXXSpeed
    shapeYYY += shapeYYYSpeed
    if(shapeXXX > width)
    {
        shapeXXX = 0;
    }
    if(shapeXXX < 0)
    {
        shapeXXX = width;
    }
    if(shapeYYY > height)
    {
        shapeYYY = 0;
    }
    if(shapeYYY < 0)
    {
        shapeYYY = height;
    }

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