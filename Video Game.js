var inputmultipl1;
var	counter = 0;
var inputmultipl1;
var input, entering;
var button1, button2,button3,button4,button5,button6,button7; 
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

 bacteriaimg = loadImage('bacteria.jpg');
 birdimg = loadImage('bird.jpg');
 bonesimg = loadImage('bones.jpg');
 chemistimg = loadImage('chemistry.jpg');
 
 robotimg = loadImage('robot.jpg');
 solarimg = loadImage('solar.jpg');

 
 
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
 ellipse(mouseX,mouseY, 25, 25);
  if(mouseIsPressed){
 	ellipse(mouseX,mouseY, 50,50);
 }else{
 	ellipse(mouseX,mouseY, 25,25);
 }

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
  button2.mousePressed(waitbeforechoice);
  
  
  
}


function waitbeforesetup(){
 clear();
 fill(0);
 textSize(50);
 text("Loading...", 580,360);
 setTimeout(setup, 2500);
}
function waitbeforechoice(){
 clear();
 entering.remove(); 
 button2.remove();
 fill(0);
 textSize(50);
 text("Loading...", 580,360);
 setTimeout(choice, 2500);
}
 
function choice(){
  clear();
  

  image(geoimg, 800,50);
  image(mathimg, 250,500);
  image(gkimg, 10,150);
  image(dogimg, 1120,450);
  
  button3 = createButton("SCIENCES");
  button3.position(690,500);
  button3.size(200,200);
  button3.mousePressed(science);
  
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
function science(){
  clear();
  button3.remove();
  button4.remove();
  button5.remove();
  button6.remove();
  background(255);
  textSize(50);
  text("Loading...", 580,360);
  setTimeout(sciencequest, 2500);
}
function sciencequest(){  
  clear();
  button8 = createButton("BIOLOGY");
  button8.size(150,150);
  button8.position(200,350);
  button8.mousePressed(waitbeforebio);
  image(bacteriaimg, 50,100,500,300); 
  
  button9 = createButton("CHEMISTRY");
  button9.size(150,150);
  button9.position(500,350);
  button9.mousePressed(waitbeforechem);
  image(chemistimg, 400,360);
  
  button10 = createButton("PHYSICS");
  button10.size(150,150);
  button10.position(1000,350);
  button10.mousePressed(waitbeforephysics);
  image(solarimg, 800,100, 500,300);


}
function waitbeforebio(){
 clear();
 button8.remove();
 button9.remove();
 button10.remove();
 
 background(255);
 textSize(50);
 text("Loading...", 580,360);
 setTimeout(biology, 2500);
 
 
}
function waitbeforechem(){
 clear();
 button8.remove();
 button9.remove();
 button10.remove();
 
 background(255);
 textSize(50);
 text("Loading...", 580,360);
 setTimeout(chemistry, 2500);
 
}
function waitbeforephysics(){
 clear();
 button8.remove();
 button9.remove();
 button10.remove();
 
 background(255);
 textSize(50);
 text("Loading...", 580,360);
 setTimeout(physics, 2500);
}


function biology(){
 clear();
 textSize(50);
 text("How Many Lungs do We have?", 300,300);
 inputbio1 = createInput();
 inputbio1.position(500,400);
 buttonbio1 = createButton("Enter");
 buttonbio1.position(input.x+input.width, 400);
 buttonbio1.mousePressed(biocorrection);
 image(lungimg, 600,400);
 image(lungimg, 400,50);
 image(lungimg, 110,40);
 image(lungimg, 20,200);
 image(lungimg, 1200,60);

  
}
function biocorrection(){ 
 clear();
 buttonbio1.remove();
 if(inputbio1.value()==2){
  correctanswerbio1();
 }else{
  wronganswerbio1();
 }
}

function biology2(){
 clear();
 background(255);
 textSize(32);
 text("BOTANY IS THE STUDY OF...", 300,200);
 buttonbio2 = createButton("BIRDS");
 buttonbio2.position(280,300);
 buttonbio2.size(200,100);
 buttonbio2.mousePressed(wronganswerbio2);
 
 buttonbio3 = createButton("ROBOTS");
 buttonbio3.position(520,350);
 buttonbio3.size(200,100);
 buttonbio3.mousePressed(wronganswerbio2);
 
 buttonbio4 = createButton("BACTERIA");
 buttonbio4.position(750,400);
 buttonbio4.size(200,100);
 buttonbio4.mousePressed(wronganswerbio2);
 
 buttonbio5 = createButton("PLANTS");
 buttonbio5.position(980,450);
 buttonbio5.size(200,100);
 buttonbio5.mousePressed(correctanswerbio2);
 image(birdimg, 800,200, 300,300);
 image(robotimg, 400,250);
}
function biology3(){
 clear();
 background(255);
 textSize(32);
 text("WHAT DOES DNA STAND FOR IN BIOLOGY?", 300,200);
 buttonbio6 = createButton("DEOXYRIBONUCLEIC ACID");
 buttonbio6.position(280,300);
 buttonbio6.size(200,100);
 buttonbio6.mousePressed(correctanswerbio3);
 
 buttonbio7 = createButton("DOES NOT APPLY");
 buttonbio7.position(520,350);
 buttonbio7.size(200,100);
 buttonbio7.mousePressed(wronganswerbio3);
 
 buttonbio8 = createButton("DYNAMIC NETWORK ADMINISTRATION");
 buttonbio8.position(750,400);
 buttonbio8.size(200,100);
 buttonbio8.mousePressed(wronganswerbio3);
 
 buttonbio9 = createButton("DETROIT NEWS AGENCY");
 buttonbio9.position(980,450);
 buttonbio9.size(200,100);
 buttonbio9.mousePressed(wronganswerbio3);
 image(dnaimg, 100,200);
}
function biology4(){
 clear();
 textSize(50);
 text("HOW MANY BONES DO YOU HAVE NOW?", 100,300);
 
	inputbio2 = createInput();
 inputbio2.position(500,400);
 buttonbio10 = createButton("Enter");
 buttonbio10.position(input.x+input.width, 400);
 buttonbio10.mousePressed(biocorrection2);
 image(bonesimg, 500,400);
 
}
function biocorrection2(){
	clear();
 buttonbio10.remove();
 if(inputbio2.value()==206){
  correctanswerbio4();
 }else{
  wronganswerbio4();
 }
}
function biology5(){
	clear();
 background(255);
 textSize(32);
 text("WHAT IS THE SCIENTIFIC NAME FOR HUMANS?", 300,200);
 buttonbio11 = createButton("HOMEO PATHERA");
 buttonbio11.position(280,300);
 buttonbio11.size(200,100);
 buttonbio11.mousePressed(wronganswerbio5);
 
 buttonbio12 = createButton("HUMAN HUMANOIDUS");
 buttonbio12.position(520,350);
 buttonbio12.size(200,100);
 buttonbio12.mousePressed(wronganswerbio5);
 
 buttonbio13 = createButton("HOMO SAPIENS");
 buttonbio13.position(750,400);
 buttonbio13.size(200,100);
 buttonbio13.mousePressed(correctanswerbio5);
 
 buttonbio14 = createButton("HOMO NEANDERTHALENSIS");
 buttonbio14.position(980,450);
 buttonbio14.size(200,100);
 buttonbio14.mousePressed(wronganswerbio5);
}
function chemistry(){
	clear();
 background(255);
 textSize(32);
 text("WHAT IS THE CHEMICAL FORMULA FOR WATER?", 300,200);
 buttonchem1 = createButton("HO2");
 buttonchem1.position(280,300);
 buttonchem1.size(200,100);
 buttonchem1.mousePressed(wronganswerchem1);
 
 buttonchem2 = createButton("2HO");
 buttonchem2.position(520,350);
 buttonchem2.size(200,100);
 buttonchem2.mousePressed(wronganswerchem1);
 
 buttonchem3 = createButton("HHO");
 buttonchem3.position(750,400);
 buttonchem3.size(200,100);
 buttonchem3.mousePressed(wronganswerchem1);
 
 buttonchem4 = createButton("H2O");
 buttonchem4.position(980,450);
 buttonchem4.size(200,100);
 buttonchem4.mousePressed(correctanswerchem1);
}
function chemistry2(){
	clear();
 textSize(50);
 text("WHAT IS THE CENTRE OF THE ATOM CALLED?", 100,300);
 
	inputchem1 = createInput();
 inputchem1.position(500,400);
 buttonchem5 = createButton("Enter");
 buttonchem5.position(input.x+input.width, 400);
 buttonchem5.mousePressed(chemcorrection);
}
function chemcorrection(){
	clear();
 buttonchem5.remove();
 if(inputchem1.value()=='nucleus'){
  correctanswerchem2();
 }else if(inputchem1.value()=='Nucleus'){
  correctanswerchem2();
 }else if(inputchem1.value()=='NUCLEUS'){
 	correctanswerchem2();
 }else{
 	wronganswerchem2();
 }
}
function chemistry3(){
	clear();
 textSize(40);
 text("K is the Chemical Symbol of What Element?", 150,300);
 
	inputchem2 = createInput();
 inputchem2.position(500,400);
 buttonchem6 = createButton("Enter");
 buttonchem6.position(input.x+input.width, 400);
 buttonchem6.mousePressed(chemcorrection2);
}
function chemcorrection2(){
	clear();
 buttonchem6.remove();
 if(inputchem1.value()=='potassium'){
  correctanswerchem3();
 }else if(inputchem1.value()=='Potassium'){
  correctanswerchem2();
 }else if(inputchem1.value()=='POTASSIUM'){
 	correctanswerchem3();
 }else{
 	wronganswerchem3();
 }
}
function chemistry4(){
	clear();
 background(255);
 textSize(32);
 text("WHICH ELEMENT IN THE PERIODIC TABLE WAS NAMED AFTER ALBERT EINSTEIN?", 300,200);
 buttonchem7 = createButton("ENSTEINIUM");
 buttonchem7.position(280,300);
 buttonchem7.size(200,100);
 buttonchem7.mousePressed(correctanswerchem4);
 
 buttonchem8 = createButton("ALBERTIUM");
 buttonchem8.position(520,350);
 buttonchem8.size(200,100);
 buttonchem8.mousePressed(wronganswerchem4);
 
 buttonchem9 = createButton("RELATIVITIUM");
 buttonchem9.position(750,400);
 buttonchem9.size(200,100);
 buttonchem9.mousePressed(wronganswerchem4);
 
 buttonchem10 = createButton("NUCLEARBOMBIUM");
 buttonchem10.position(980,450);
 buttonchem10.size(200,100);
 buttonchem10.mousePressed(wronganswerchem4);
}
function chemistry5(){
	clear();
 background(255);
 textSize(32);
 text("WHAT GAS DOES A COW FART?", 300,200);
 buttonchem11 = createButton("OXYGEN");
 buttonchem11.position(280,300);
 buttonchem11.size(200,100);
 buttonchem11.mousePressed(correctanswerchem5);
 
 buttonchem12 = createButton("FLUORINE");
 buttonchem12.position(520,350);
 buttonchem12.size(200,100);
 buttonchem12.mousePressed(wronganswerchem5);
 
 buttonchem13 = createButton("METHANE");
 buttonchem13.position(750,400);
 buttonchem13.size(200,100);
 buttonchem13.mousePressed(wronganswerchem5);
 
 buttonchem14 = createButton("CARBON DIOXIDE");
 buttonchem14.position(980,450);
 buttonchem14.size(200,100);
 buttonchem14.mousePressed(wronganswerchem5);
}
function physics(){
	clear();
 textSize(40);
 text("WHAT IS THE BIGGEST PLANET IN OUR SOLAR SYSTEM", 150,300);
 
	inputphys1 = createInput();
 inputphys1.position(500,400);
 buttonphys1 = createButton("Enter");
 buttonphys1.position(input.x+input.width, 400);
 buttonphys1.mousePressed(physicscorrection);
}
function physicscorrection(){
	clear();
 buttonphys1.remove();
 if(inputphys1.value()=='jupiter'){
  correctanswerphys1();
 }else if(inputphys1.value()=='Jupiter'){
  correctanswerphys1();
 }else if(inputphys1.value()=='JUPITER'){
 	correctanswerphys1();
 }else{
 	wronganswerphys1();
 }
}
function physics2(){
	clear();
 background(255);
 textSize(32);
 text("WHAT IS THE BOILING POINT OF WATER", 300,200);
 buttonphys1 = createButton("50 DEGREES CELSIUS");
 buttonphys1.position(280,300);
 buttonphys1.size(200,100);
 buttonphys1.mousePressed(wronganswerphys2);
 
 buttonphys2 = createButton("100 DEGREES CELSIUS");
 buttonphys2.position(520,350);
 buttonphys2.size(200,100);
 buttonphys2.mousePressed(correctanswerphys2);
 
 buttonphys3 = createButton("200 DEGREES CELSIUS");
 buttonphys3.position(750,400);
 buttonphys3.size(200,100);
 buttonphys3.mousePressed(wronganswerphys2);
 
 buttonphys4 = createButton("400 DEGREES CELSIUS");
 buttonphys4.position(980,450);
 buttonphys4.size(200,100);
 buttonphys4.mousePressed(wronganswerphys2);
}
function physics3(){
	clear();
 textSize(40);
 text("WHAT UNIT IS FORCE MEASURED IN", 150,300);
 
	inputphys2 = createInput();
 inputphys2.position(500,400);
 buttonphys5 = createButton("Enter");
 buttonphys5.position(input.x+input.width, 400);
 buttonphys5.mousePressed(physicscorrection);
}
function physicscorrection2(){
	clear();
 buttonphys5.remove();
 if(inputphy21.value()=='newton'){
  correctanswerphys3();
 }else if(inputphys2.value()=='Newton'){
  correctanswerphys3();
 }else if(inputphys2.value()=='NEWTON'){
 	correctanswerphys3();
 }else{
 	wronganswerphys3();
 }
}
function physics4(){
	clear();
 background(255);
 textSize(32);
 text("FOR EVERY ACTION, THERE IS...", 300,200);
 buttonphys6 = createButton("AN EQUAL AND OPPOSITE REACTION");
 buttonphys6.position(280,300);
 buttonphys6.size(200,100);
 buttonphys6.mousePressed(correctanswerphys4);
 
 buttonphys7 = createButton("AN EQUAL AND DIFFERENT REACTION");
 buttonphys7.position(520,350);
 buttonphys7.size(200,100);
 buttonphys7.mousePressed(wronganswerphys4);
 
 buttonphys8 = createButton("A DIFFERENT REACTION");
 buttonphys8.position(750,400);
 buttonphys8.size(200,100);
 buttonphys8.mousePressed(wronganswerphys4);
 
 buttonphys9 = createButton("CONSEQUENCES");
 buttonphys9.position(980,450);
 buttonphys9.size(200,100);
 buttonphys9.mousePressed(wronganswerphys4);
}
function physics5(){
	clear();
 background(255);
 textSize(32);
 text("WHICH IS NOT A STATE OF MATTER", 300,200);
 buttonphys10 = createButton("SOLID");
 buttonphys10.position(280,300);
 buttonphys10.size(200,100);
 buttonphys10.mousePressed(wronganswerphys5);
 
 buttonphys11 = createButton("PLASMA");
 buttonphys11.position(520,350);
 buttonphys11.size(200,100);
 buttonphys11.mousePressed(wronganswerphys5);
 
 buttonphys12 = createButton("WATER");
 buttonphys12.position(750,400);
 buttonphys12.size(200,100);
 buttonphys12.mousePressed(correctanswerphys5);
 
 buttonphys13 = createButton("GAS");
 buttonphys13.position(980,450);
 buttonphys13.size(200,100);
 buttonphys13.mousePressed(wronganswerphys5);
}
function generalknowledge(){
 clear();
 background(255);
 button3.remove();
 button4.remove();
 button5.remove();
 button6.remove();
 textSize(50);
 text("Loading...", 580,360);
 setTimeout(generalknowledgequest, 2500);
}
function generalknowledgequest(){
 clear();
 textSize(32);
 text("Which Mountain Range is Mount Everest Found In?", 300,200);
 buttongk1 = createButton("ALPS");
 buttongk1.position(280,300);
 buttongk1.size(200,100);
 buttongk1.mousePressed(wronganswergk1);
 
 buttongk2 = createButton("HIMALAYAS");
 buttongk2.position(520,350);
 buttongk2.size(200,100);
 buttongk2.mousePressed(correctanswergk1);
 
 buttongk3 = createButton("ANDES");
 buttongk3.position(750,400);
 buttongk3.size(200,100);
 buttongk3.mousePressed(wronganswergk1);
 
}
function generalknowledgequest2(){
 clear();
 textSize(32);
 text("Which is the Oldest Sports Game in the World?", 300,200);
 buttongk4 = createButton("ARCHERY");
 buttongk4.position(280,300);
 buttongk4.size(200,100);
 buttongk4.mousePressed(correctanswergk2);
 
 buttongk5 = createButton("FOOTBALL");
 buttongk5.position(520,350);
 buttongk5.size(200,100);
 buttongk5.mousePressed(wronganswergk2);
 
 buttongk6 = createButton("HOCKEY");
 buttongk6.position(750,400);
 buttongk6.size(200,100);
 buttongk6.mousePressed(wronganswergk2);
 
}
function generalknowledgequest3(){
 clear();
 textSize(32);
 text("What is the Full Form of WWW?", 300,200);
 buttongk7 = createButton("WHAT WENT WELL");
 buttongk7.position(280,300);
 buttongk7.size(200,100);
 buttongk7.mousePressed(wronganswergk3);
 
 buttongk8 = createButton("WORLD WILDLIFE WELLNESS");
 buttongk8.position(520,350);
 buttongk8.size(200,100);
 buttongk8.mousePressed(wronganswergk3);
 
 buttongk9 = createButton("WORLD WIDE WEB");
 buttongk9.position(750,400);
 buttongk9.size(200,100);
 buttongk9.mousePressed(correctanswergk3)
}
function generalknowledgequest4(){
 clear();
 textSize(32);
 text("Which is the Coldest Planet in the Solar System?", 300,200);
 buttongk10 = createButton("PLUTO");
 buttongk10.position(280,300);
 buttongk10.size(200,100);
 buttongk10.mousePressed(wronganswergk4);
 
 buttongk11 = createButton("NEPTUNE");
 buttongk11.position(520,350);
 buttongk11.size(200,100);
 buttongk11.mousePressed(correctanswergk4);
 
 buttongk12 = createButton("MERCURY");
 buttongk12.position(750,400);
 buttongk12.size(200,100);
 buttongk12.mousePressed(wronganswergk4);
 
}
function generalknowledgequest5(){
 clear();
 textSize(32);
 text("Who Painted the Mona Lisa?", 300,200);
 buttongk13 = createButton("LEONARDO DA VINCI");
 buttongk13.position(280,300);
 buttongk13.size(200,100);
 buttongk13.mousePressed(correctanswergk5);
 
 buttongk14 = createButton("VINCENT VAN GOGH");
 buttongk14.position(520,350);
 buttongk14.size(200,100);
 buttongk14.mousePressed(wronganswergk5);
 
 buttongk15 = createButton("MICHELANGELO");
 buttongk15.position(750,400);
 buttongk15.size(200,100);
 buttongk15.mousePressed(wronganswergk5);
 
}
function generalknowledgequest6(){
 clear();
 textSize(32);
 text("Which is the Most Widely Spoken Language in the World?", 300,200);
 buttongk16 = createButton("HEBREW");
 buttongk16.position(280,300);
 buttongk16.size(200,100);
 buttongk16.mousePressed(wronganswergk6);
 
 buttongk17 = createButton("ENGLISH");
 buttongk17.position(520,350);
 buttongk17.size(200,100);
 buttongk17.mousePressed(wronganswergk6);
 
 buttongk18 = createButton("MANDARIN");
 buttongk18.position(750,400);
 buttongk18.size(200,100);
 buttongk18.mousePressed(correctanswergk6);
 
}
function generalknowledgequestend(){
 clear();
 button7 = createButton("END");
 button7.size(150,150);
 button7.position(1000,550);
 button7.mousePressed(waitbeforechoice); 
 background(255);
 var name = input.value();
 entering.html('Welcome '+name+'!');
 input.value('');
 entering.position(500,360);
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
 setTimeout(geohistoryquest, 2500);


}
function geohistoryquest(){
 clear();
 textSize(32);
 text("Who is the First President of the USA?", 300,200);
 buttongh1 = createButton("ABRAHAM LINCOLN");
 buttongh1.position(280,300);
 buttongh1.size(200,100);
 buttongh1.mousePressed(wronganswergh1);
 
 buttongh2 = createButton("DONALD TRUMP");
 buttongh2.position(520,350);
 buttongh2.size(200,100);
 buttongh2.mousePressed(wronganswergh1);
 
 buttongh3 = createButton("JOHN F. KENNEDY");
 buttongh3.position(750,400);
 buttongh3.size(200,100);
 buttongh3.mousePressed(wronganswergh1);
 
 buttongh4 = createButton("GEORGE WASHINGTON");
 buttongh4.position(980,450);
 buttongh4.size(200,100);
 buttongh4.mousePressed(correctanswergh1);
 
}
function geohistoryquest2(){
 clear();
 textSize(32);
 text("What is the Name of the Highest Free Standing Mountain in the World?", 200,200);
 buttongh5 = createButton("MERU");
 buttongh5.position(280,300);
 buttongh5.size(200,100);
 buttongh5.mousePressed(wronganswergh2);
 
 buttongh6 = createButton("MT. EVEREST");
 buttongh6.position(520,350);
 buttongh6.size(200,100);
 buttongh6.mousePressed(wronganswergh2);
 
 buttongh7 = createButton("KILIMANJARO");
 buttongh7.position(750,400);
 buttongh7.size(200,100);
 buttongh7.mousePressed(correctanswergh2);
 
 buttongh8 = createButton("ACONCAGUA");
 buttongh8.position(980,450);
 buttongh8.size(200,100);
 buttongh8.mousePressed(wronganswergh2);
}
function geohistoryquest3(){
 clear();
 textSize(32);
 text("Which is the longest river in Africa?", 300,200);
 buttongh9 = createButton("THE NILE");
 buttongh9.position(280,300);
 buttongh9.size(200,100);
 buttongh9.mousePressed(correctanswergh3);
 
 buttongh10 = createButton("AMAZON RIVER");
 buttongh10.position(520,350);
 buttongh10.size(200,100);
 buttongh10.mousePressed(wronganswergh3);
 
 buttongh11 = createButton("THE ZAMBEZI");
 buttongh11.position(750,400);
 buttongh11.size(200,100);
 buttongh11.mousePressed(wronganswergh3);
 
 buttongh12 = createButton("CONGO RIVER");
 buttongh12.position(980,450);
 buttongh12.size(200,100);
 buttongh12.mousePressed(wronganswergh3);
}
function geohistoryquest4(){
 clear();
 textSize(32);
 text("In which country was paper invented?", 300,200);
 buttongh13 = createButton("ENGLAND");
 buttongh13.position(280,300);
 buttongh13.size(200,100);
 buttongh13.mousePressed(wronganswergh4);
 
 buttongh14 = createButton("CHINA");
 buttongh14.position(520,350);
 buttongh14.size(200,100);
 buttongh14.mousePressed(correctanswergh4);
 
 buttongh15 = createButton("USA");
 buttongh15.position(750,400);
 buttongh15.size(200,100);
 buttongh15.mousePressed(wronganswergh4);
 
 buttongh16 = createButton("INDIA");
 buttongh16.position(980,450);
 buttongh16.size(200,100);
 buttongh16.mousePressed(wronganswergh4);
}
function geohistoryquest5(){
 clear();
 textSize(32);
 text("Which cities in Japan did the US strike a nuclear bomb in 1945?", 300,200);
 buttongh17 = createButton("TOKYO and OSAKA");
 buttongh17.position(280,300);
 buttongh17.size(200,100);
 buttongh17.mousePressed(wronganswergh5);
 
 buttongh18 = createButton("TOKYO and YOKOHAMA");
 buttongh18.position(520,350);
 buttongh18.size(200,100);
 buttongh18.mousePressed(wronganswergh5);
 
 buttongh19 = createButton("HIROSHIMA and NAGASAKI");
 buttongh19.position(750,400);
 buttongh19.size(200,100);
 buttongh19.mousePressed(correctanswergh5);
 
 buttongh20 = createButton("HIROSHIMA and KAWASAKI");
 buttongh20.position(980,450);
 buttongh20.size(200,100);
 buttongh20.mousePressed(wronganswergh5);
}
function geohistoryquest6(){
 clear();
 textSize(32);
 text("How Many Great Lakes are There?", 300,200);
 buttongh21 = createButton("3");
 buttongh21.position(280,300);
 buttongh21.size(200,100);
 buttongh21.mousePressed(wronganswergh6);
 
 buttongh22 = createButton("2");
 buttongh22.position(520,350);
 buttongh22.size(200,100);
 buttongh22.mousePressed(wronganswergh6);
 
 buttongh23 = createButton("7");
 buttongh23.position(750,400);
 buttongh23.size(200,100);
 buttongh23.mousePressed(wronganswergh6);
 
 buttongh24 = createButton("5");
 buttongh24.position(980,450);
 buttongh24.size(200,100);
 buttongh24.mousePressed(correctanswergh6);
}
function geohistoryquest7(){
 clear();
 textSize(32);
 text("Which country did Christopher Columbus Discover?", 300,200);
 buttongh25 = createButton("INDIA");
 buttongh25.position(280,300);
 buttongh25.size(200,100);
 buttongh25.mousePressed(wronganswergh7);
 
 buttongh26 = createButton("AMERICA");
 buttongh26.position(520,350);
 buttongh26.size(200,100);
 buttongh26.mousePressed(correctanswergh7);
 
 buttongh27 = createButton("THE BAHAMAS");
 buttongh27.position(750,400);
 buttongh27.size(200,100);
 buttongh27.mousePressed(wronganswergh7);
 
 buttongh28 = createButton("ENGLAND");
 buttongh28.position(980,450);
 buttongh28.size(200,100);
 buttongh28.mousePressed(wronganswergh7);
}
function geohistoryquestend(){
 clear();
 button7 = createButton("END");
 button7.size(150,150);
 button7.position(1000,550);
 button7.mousePressed(waitbeforechoice); 
 background(255);
 var name = input.value();
 entering.html('Welcome '+name+'!');
 input.value('');
 entering.position(500,360);
}

function quit(){
  music.stop();
  button3.remove();
  button4.remove();
  button5.remove();
  button6.remove();
  waitbeforesetup();
}

function correctanswergk1(){
 clear();
 buttongk1.remove();
 buttongk2.remove();
 buttongk3.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(generalknowledgequest2, 1500);
}
function correctanswergk2(){
 clear();
 buttongk4.remove();
 buttongk5.remove();
 buttongk6.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(generalknowledgequest3, 1500);
}
function wronganswergk1(){
 clear();
 buttongk1.remove();
 buttongk2.remove();
 buttongk3.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(generalknowledgequest2, 1500);
}
function wronganswergk2(){
 clear();
 buttongk4.remove();
 buttongk5.remove();
 buttongk6.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(generalknowledgequest3, 1500);
}
function correctanswergk3(){
 clear();
 buttongk7.remove();
 buttongk8.remove();
 buttongk9.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(generalknowledgequest4, 1500);
}
function wronganswergk3(){
 clear();
 buttongk7.remove();
 buttongk8.remove();
 buttongk9.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(generalknowledgequest4, 1500);
}
function correctanswergk4(){
 clear();
 buttongk10.remove();
 buttongk11.remove();
 buttongk12.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(generalknowledgequest5, 1500);
}
function wronganswergk4(){
 clear();
 buttongk10.remove();
 buttongk11.remove();
 buttongk12.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(generalknowledgequest5, 1500);
}
function correctanswergk5(){
 clear();
 buttongk13.remove();
 buttongk14.remove();
 buttongk15.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(generalknowledgequest6, 1500);
}
function wronganswergk5(){
 clear();
 buttongk13.remove();
 buttongk14.remove();
 buttongk15.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(generalknowledgequest6, 1500);
}
function correctanswergk6(){
 clear();
 buttongk16.remove();
 buttongk17.remove();
 buttongk18.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(generalknowledgequestend, 1500);
}
function wronganswergk6(){
 clear();
 buttongk16.remove();
 buttongk17.remove();
 buttongk18.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(generalknowledgequestend, 1500);
}
function correctanswergh1(){
 clear();
 buttongh1.remove();
 buttongh2.remove();
 buttongh3.remove();
 buttongh4.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(geohistoryquest2, 1500);
}
function wronganswergh1(){
 clear();
 buttongh1.remove();
 buttongh2.remove();
 buttongh3.remove();
 buttongh4.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(geohistoryquest2, 1500);
}
function correctanswergh2(){
 clear();
 buttongh5.remove();
 buttongh6.remove();
 buttongh7.remove();
 buttongh8.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(geohistoryquest3, 1500);
}
function wronganswergh2(){
 clear();
 buttongh5.remove();
 buttongh6.remove();
 buttongh7.remove();
 buttongh8.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(geohistoryquest3, 1500);
}
function correctanswergh3(){
 clear();
 buttongh9.remove();
 buttongh10.remove();
 buttongh11.remove();
 buttongh12.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(geohistoryquest4, 1500);
}
function wronganswergh3(){
 clear();
 buttongh9.remove();
 buttongh10.remove();
 buttongh11.remove();
 buttongh12.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(geohistoryquest4, 1500);
}
function correctanswergh4(){
 clear();
 buttongh13.remove();
 buttongh14.remove();
 buttongh15.remove();
 buttongh16.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(geohistoryquest5, 1500);
}
function wronganswergh4(){
 clear();
 buttongh13.remove();
 buttongh14.remove();
 buttongh15.remove();
 buttongh16.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(geohistoryquest5, 1500);
}
function correctanswergh5(){
 clear();
 buttongh17.remove();
 buttongh18.remove();
 buttongh19.remove();
 buttongh20.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(geohistoryquest6, 1500);
}
function wronganswergh5(){
 clear();
 buttongh17.remove();
 buttongh18.remove();
 buttongh19.remove();
 buttongh20.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(geohistoryquest6, 1500);
}
function correctanswergh6(){
 clear();
 buttongh21.remove();
 buttongh22.remove();
 buttongh23.remove();
 buttongh24.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(geohistoryquest7, 1500);
}
function wronganswergh6(){
 clear();
 buttongh21.remove();
 buttongh22.remove();
 buttongh23.remove();
 buttongh24.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(geohistoryquest7, 1500);
}
function correctanswergh7(){
 clear();
 buttongh25.remove();
 buttongh26.remove();
 buttongh27.remove();
 buttongh28.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(geohistoryquestend, 1500);
}
function wronganswergh7(){
 clear();
 buttongh25.remove();
 buttongh26.remove();
 buttongh27.remove();
 buttongh28.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(geohistoryquestend, 1500);
}
function correctanswerbio1(){
 clear();
 inputbio1.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(biology2, 1500);
}
function wronganswerbio1(){
 clear();
 inputbio1.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(biology2, 1500);
}
function correctanswerbio2(){
 clear();
 buttonbio2.remove();
 buttonbio3.remove();
 buttonbio4.remove();
 buttonbio5.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(biology3, 1500);
}
function wronganswerbio2(){
 clear();
 buttonbio2.remove();
 buttonbio3.remove();
 buttonbio4.remove();
 buttonbio5.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(biology3, 1500);
}	
function correctanswerbio3(){
 clear();
 buttonbio6.remove();
 buttonbio7.remove();
 buttonbio8.remove();
 buttonbio9.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(biology4, 1500);
}
function wronganswerbio3(){
 clear();
 buttonbio6.remove();
 buttonbio7.remove();
 buttonbio8.remove();
 buttonbio9.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(biology4, 1500);
}	
function correctanswerbio4(){
 clear();
 inputbio2.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(biology5, 1500);
}
function wronganswerbio4(){
 clear();
 inputbio2.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(biology5, 1500);
}
function correctanswerbio5(){
 clear();
 buttonbio11.remove();
 buttonbio12.remove();
 buttonbio13.remove();
 buttonbio14.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(sciencequest, 1500);
}
function wronganswerbio5(){
 clear();
 buttonbio11.remove();
 buttonbio12.remove();
 buttonbio13.remove();
 buttonbio14.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(sciencequest, 1500);
}	
function correctanswerchem1(){
 clear();
 buttonchem1.remove();
 buttonchem2.remove();
 buttonchem3.remove();
 buttonchem4.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(chemistry2, 1500);
}
function wronganswerchem1(){
 clear();
 buttonchem1.remove();
 buttonchem2.remove();
 buttonchem3.remove();
 buttonchem4.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(chemistry2, 1500);
}	
function correctanswerchem2(){
 clear();
 inputchem1.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(chemistry3, 1500);
}
function wronganswerchem2(){
 clear();
 inputchem1.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(chemistry3, 1500);
}
function correctanswerchem3(){
 clear();
 inputchem2.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(chemistry4, 1500);
}
function wronganswerchem3(){
 clear();
 inputchem2.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(chemistry4, 1500);
}
function correctanswerchem4(){
 clear();
 buttonchem7.remove();
 buttonchem8.remove();
 buttonchem9.remove();
 buttonchem10.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(chemistry5, 1500);
}
function wronganswerchem4(){
 clear();
 buttonchem7.remove();
 buttonchem8.remove();
 buttonchem9.remove();
 buttonchem10.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(chemistry5, 1500);
}	
function correctanswerchem5(){
 clear();
 buttonchem11.remove();
 buttonchem12.remove();
 buttonchem13.remove();
 buttonchem14.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(sciencequest, 1500);
}
function wronganswerchem4(){
 clear();
 buttonchem11.remove();
 buttonchem12.remove();
 buttonchem13.remove();
 buttonchem14.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(sciencequest, 1500);
}	
function correctanswerphys1(){
 clear();
 inputphys1.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(physics2, 1500);
}
function wronganswerphys1(){
 clear();
 inputphys1.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(physics2, 1500);
}
function correctanswerphys2(){
 clear();
 buttonphys1.remove();
 buttonphys2.remove();
 buttonphys3.remove();
 buttonphys4.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(physics3, 1500);
}
function wronganswerphys2(){
 clear();
 buttonphys1.remove();
 buttonphys2.remove();
 buttonphys3.remove();
 buttonphys4.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(physics3, 1500);
}	
function correctanswerphys3(){
 clear();
 inputphys2.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(physics4, 1500);
}
function wronganswerphys3(){
 clear();
 inputphys2.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(physics4, 1500);
}
function correctanswerphys4(){
 clear();
 buttonphys6.remove();
 buttonphys7.remove();
 buttonphys8.remove();
 buttonphys9.remove();
 background(0,255,0);
 textSize(72);
 text("CORRECT!",500,360);
 setTimeout(physics5, 1500);
}
function wronganswerphys4(){
 clear();
 buttonphys6.remove();
 buttonphys7.remove();
 buttonphys8.remove();
 buttonphys9.remove();
 background(255,0,0);
 textSize(72);
 text("WRONG!",500,360);
 setTimeout(physics5, 1500);
}	
