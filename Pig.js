class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }
  display (){
    if(this.body.speed<3){
      super.display()
    }
    else{
      World.remove(world,this.body);
      push()
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y);
      pop()
    }
    //console.log(this.body.speed)
  }
};


// 0=255
// memory unit 1 byte=8 bits

// 0=>black=>1 fully off byte (00000000)
// 1=>white=>1 fully on byte  (11111111)