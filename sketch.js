  var offset = 0;
let img;
let img2;
let shipsong;
let whizzing;

// Load an image and create a p5.Image object.
function preload() {
  img = loadImage('Panorama 1.jpg');
  img2=loadImage('robot eye.jpeg');
  shipsong=loadSound('alien ships.mp3');
  whizzing=loadSound('whizzing.wav');

}

function setup() {
  createCanvas(windowWidth ,windowHeight ,WEBGL);
 

}

function draw() {
  
    var x=1000;
  var y=90
  while (x <= width,y <= height){
 ellipsoid(x+offset,y+offset, 150, 45, 150, 8, 3);
 fill (255,255,255);
  translate(0,0,0);
    x = x+random(5,50)
  y = y+random(5,50)
}
  
  // Add the panorama.
  panorama(img);

  // Enable orbiting with the mouse.
  orbitControl();

  // Use the image as a light source.
  imageLight(img);

  // Style the sphere.
  noStroke();
  specularMaterial(50);
  shininess(200);
  metalness(100);

  // Draw the sphere. CENTRAL
  //body

 ellipsoid(1,1,1, 8, 6);
  translate(0,0,0);

  //sail CENTRAL
  
 ellipsoid(1, 1, 1, 8, 9);
  translate(0,0,0);

 
    
     ellipsoid(1, 1, 1, 8, 9,rotateX(frameCount*0.03), rotateY(frameCount*0.03),rotateZ(frameCount*0.03));
  translate(500,500,0);
  
  
  
    //body
 ellipsoid(300, 50, 500, 8, 3);
  translate(0,0,0);
  
  //sail
 ellipsoid(50, 100, 300, 8, 9);
  translate(0,0,0);
  
  ellipsoid(10, 30, 250, 8, 9, rotateX(frameCount*0.005), rotateZ(frameCount*0.01));
  translate(1000,500,0);
  
  
  
  
    //body
 ellipsoid(150, 45, 300, 8, 3);
  translate(0,0,0);
  
  //sail
 ellipsoid(20, 150, 250, 8, 9);
  translate(0,0,0);
  
     ellipsoid(10, 300, 40, 8, 9, rotateX(frameCount*0.02), rotateY(frameCount*0.02),rotateZ(frameCount*0.02));
  translate(500,30,0);
  
  
  
  
    //body
 ellipsoid(150, 45, 300, 8, 3);
  translate(0,0,200);
  
  //sail
 ellipsoid(20, 150, 250, 8, 9);
  translate(0,0,0);
  
     ellipsoid(10, 300, 40, 8, 9);
  translate(1500,500,0);  
  
  
  
  
      //body
 ellipsoid(500, 45, 500, 24, 3, rotateX(frameCount*0.01), rotateY(frameCount*0.01));
  sphere(200)
  translate(0,0,0);
  

  
    //body
   ellipsoid(300, 30, 300, 24, 3, rotateX(frameCount*0.03), rotateZ(frameCount*0.03));
   sphere(150)
  translate(900,0,0);

  
   //body
ellipsoid(600, 60, 600, 24, 3, rotateX(frameCount*0.01), rotateY(frameCount*0.01));
   sphere(250)
 translate(0,0,900);
  
texture(img2);
  }

function mouseMoved(){
    if (whizzing.isLoaded()) {
      whizzing.play();
    whizzing.loop();
  }

      if (shipsong.isLoaded()) {
    shipsong.play();
    shipsong.loop();
  }
  
}