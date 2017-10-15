var fs
var input, entering;
var button1, button2,button3,col3,button4,col4,button5,col5,button6,button7; 
var button8, button9, button10, button11, button12;
var music;
var mathimg;
var geoimg;
var gkimg;
var dogimg;
function preload() {
 music = loadSound('bgm.mp3');
 geoimg = loadImage('geopic.png');
 mathimg = loadImage('mathpic.png');
 gkimg = loadImage('gkpic.png');
 dogimg = loadImage('dog.png');
 
 
 
}

function setup() {
 
 createCanvas(1280,720);
 background(255);
 
 music.loop();
 loop();
 
 input = createInput();
 input.position(500,360); 
 button1 = createButton("Enter");
 button1.position(input.x+input.width, 360);
 button1.size(100);
 button1.mousePressed(enter);
  
 entering = createElement('h1', 'Enter Your Name');
 entering.position(470,285);

}
function draw(){
 fill(255,255,0);
 strokeWeight(10);
 rectMode(CENTER);
 rect(width/2, height/2,400,200);
 

 fill(255,255,0);
 strokeWeight(1);
 ellipse(mouseX,mouseY, 30, 30);
}



 
 

function enter() {
  noLoop();
  clear();
  
  input.remove();
  button1.remove();
  textSize(34);
  var name = input.value();
  entering.html('Welcome '+name+'!');
  input.value('');
  for (var i=0; i<200; i++) {
    push();
    fill(255,random(255), 0);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  
  }
  button2 = createButton("Continue");
  button2.position(input.x+input.width, 400);
  button2.size(100);
  button2.mousePressed(choice);
  
  
  
}

 
function choice(){
  clear();
  
  entering.remove(); 
  button2.remove();
  image(geoimg, 800,50);
  image(mathimg, 250,500);
  image(gkimg, 10,150);
  image(dogimg, 1120,450);
  
  button3 = createButton("MATH");
  button3.position(690,500);
  button3.size(200,200);
  button3.mousePressed(math);
  
  button4 = createButton("GENERAL KNOWLEDGE");
  button4.position(800,200);
  button4.size(200,200);
  button4.mousePressed(generalknowledge);
  
  button5 = createButton("GEOGRAPHY & HISTORY");
  button5.position(1100,200);
  button5.size(200,200);
  button5.mousePressed(geohistory);
  
  button6 = createButton("GO BACK");
  button6.size(150,150);
  button6.position(1000,550);
  button6.mousePressed(quit);

  
 
  fill(0);
  text("Choose Your Subject",100,100);
}
function math(){
  clear();
  button3.remove();
  button4.remove();
  button5.remove();
  button6.remove();
  background(255);
  textSize(50);
  text("Loading...", 580,360);
  setTimeout(mathquest, 4000);
}
function mathquest(){  
  clear();
  button7 = createButton("GO BACK");
  button7.size(150,150);
  button7.position(1000,550);
  button7.mousePressed(choice); 
  button8 = createButton("MULTIPLICATION");
  button8.size(150,150);
  button8.position(200,350);
  button8.mousePressed(multipl);
  
  button9 = createButton("DIVISION");
  button9.size(150,150);
  button9.position(400,350);
  button9.mousePressed(divis);
  
  button10 = createButton("ADDITION");
  button10.size(150,150);
  button10.position(600,350);
  button10.mousePressed(addit);
  
  button11 = createButton("SUBTRACTION");
  button11.size(150,150);
  button11.position(800,350);
  button11.mousePressed(subtra);
  
  button12 = createButton("COMBINED");
  button12.size(150,150);
  button12.position(1000,350);
  button12.mousePressed(combined);

}
function generalknowledge(){
  button3.remove();
  button4.remove();
  button5.remove();
  button6.remove();
  button7 = createButton("GO BACK");
  button7.size(150,150);
  button7.position(1000,550);
  button7.mousePressed(choice);
  background(255);
}
function geohistory(){
 clear();
 background(255);
 button3.remove();
 button4.remove();
 button5.remove();
 button6.remove();
 textSize(50);
 text("Loading...", 580,360);
 setTimeout(geohistquest, 4000);


}
function geohistquest(){
 clear();
 button7 = createButton("GO BACK");
 button7.size(150,150);
 button7.position(1000,550);
 button7.mousePressed(choice); 
 
}
function quit(){
  music.stop();
  button3.remove();
  button4.remove();
  button5.remove();
  button6.remove();
  setup();
}
function multipl(){
 clear();
 button8.remove();
 button9.remove();
 button10.remove();
 button11.remove();
 button12.remove();
 button7 = createButton("GO BACK");
 button7.size(150,150);
 button7.position(1000,550);
 button7.mousePressed(choice);
 
 
}
function divis(){
 clear();
 button8.remove();
 button9.remove();
 button10.remove();
 button11.remove();
 button12.remove();
 button7 = createButton("GO BACK");
 button7.size(150,150);
 button7.position(1000,550);
 button7.mousePressed(choice);
 
}
function addit(){
 clear();
 button8.remove();
 button9.remove();
 button10.remove();
 button11.remove();
 button12.remove();
 button7 = createButton("GO BACK");
 button7.size(150,150);
 button7.position(1000,550);
 button7.mousePressed(choice);
 
}
function subtra(){
 clear();
 button8.remove();
 button9.remove();
 button10.remove();
 button11.remove();
 button12.remove();
 button7 = createButton("GO BACK");
 button7.size(150,150);
 button7.position(1000,550);
 button7.mousePressed(choice);
 
}
function combined(){
 clear();
 button8.remove();
 button9.remove();
 button10.remove();
 button11.remove();
 button12.remove();
 button7 = createButton("GO BACK");
 button7.size(150,150);
 button7.position(1000,550);
 button7.mousePressed(choice);
 
}
