class Obstacle{
    
    constructor(position,length,breadth){
        
        this.originalPosition = createVector(position.x,position.y);
        this.position = position;
        this.length = length;
        this.breadth = breadth;
        this.vel = p5.Vector.random2D().mult(0.005);
        this.acc = createVector(0,0,0);
        
    }
    
    containsPt(spot) {
        
    if (spot.x > this.position.x && spot.x < (this.position.x + this.length) && spot.y > this.position.y && spot.y < (this.position.y + this.breadth)) {
      return true;
    } else {
      return false;
    }
  }
    
    update(){
        
        this.vel.add(this.acc);
        this.position.add(this.vel);

    }
    
    restore(){
        
//        console.log("restoring");
        this.position = this.originalPosition.copy();
        //        
//        console.log(this.originalPosition);
        
    }
    
}