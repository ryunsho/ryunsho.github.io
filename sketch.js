var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('#E6E6FA') // automatic semicolon insertion
    rect(x,y,10,10);
    x = x + 2;
    x = x % 750; // modulo operator
    y = y + 1;
    y = y % 500;
}