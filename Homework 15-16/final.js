var size = 50;
var count = 0;
var sizeDirection = 1;

function setup()
{
    createCanvas(870, 870);
}

function draw()
{
    background(2, 128, 188);
    //shark
    stroke(0)
    fill(53, 62, 70);
    //top fin
    ellipse(475, 300, 65, 100)
    //body
    ellipse(435, 435, 435, 275);
    //belly
    fill(255, 255, 255)
    ellipse(435, 495, 360, 155);
    //tail
    fill(53, 62, 70);
    ellipse(220, 420, 75, 250);
    //side fin
    ellipse(435, 435, 65, 100);
    //eye
    fill(0);
    circle(525, 380, 50);
    //shine
    fill(255, 255, 255);
    circle(515, 375, 20);
    circle(525, 363, 10);
    //mouth
    stroke(2, 128, 188);
    fill(2, 128, 188);
    ellipse(625, 435, 160, 100);
    //toung
    stroke(0)
    fill(179, 40, 10);
    ellipse(602, 450, 100, 50);
    //bubbles :)
    stroke(2, 128, 188);
    fill(151, 216, 236);
    circle(600, 30, 35);
    circle(725, 75, 35);
    circle(675, 300, 35);
    circle(650, 175, 35);
    circle(700, 225, 35);
    
    //text
    fill(0, 74, 0);
    textSize(size);
                size+= sizeDirection;
                count++;
                if(count > 15)
                {
                    sizeDirection *=-1;
                    count = 0;
                }
                
                text("~Chunky Shark~",225, 830);
}