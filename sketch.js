var boy,boyImg;
var leftBoundary,rightBoundary;
var pathImg,path;



function preload(){
  pathImg =loadImage ("path.png") ;
  boyImg=loadAnimation ("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png"); 
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
path= createSprite(200,200,400,400);
path.addImage("cenario",pathImg);
path.scale=0.9;

//crie um sprite de menino
boy = createSprite(200,300,50,50);
boy.addAnimation("running",boyImg);
boy.scale=0.8;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);

rightBoundary.visible=false;
}

function draw() {
  background("brown");
 
  
  // mover o menino com o mouse usando mouseX
  boy.x=world.mouseX;
//não saia da tela
  edges= createEdgeSprites();
  boy.collide(rightEdge);
  boy.collide(leftEdge);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

path.velocityY = 2;
  //código para redefinir o fundo
  if(path.y >400 ){
    path.y = height/2;
  }
  
 drawSprites();
  
}
