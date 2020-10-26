var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200, 200, 50, 50);
  fixedrect=createSprite(400,200,50,80)
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
console.log(fixedrect.y-movingrect.y)
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2&&
    movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
    movingrect.shapeColor="pink"
  fixedrect.shapeColor="pink"
  }else{
    movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
  }

  drawSprites();
}