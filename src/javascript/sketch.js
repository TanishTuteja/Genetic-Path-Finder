function setup() {
    createCanvas(windowWidth,windowHeight);
    
    this.lifetime = 200;
    this.popSize = 100;
    this.mutationRate = 0.01;
    this.genPop = true;
    
    this.population = new Population(this.popSize,this.lifetime,this.mutationRate); 
    this.framec = 0;
    
    this.target = createVector(windowWidth/2,50);
    this.targetSize = 40;
    
    this.obstacles = [];
    this.obstacles.push(new Obstacle(createVector(100,200),200,50));
    this.obstacles.push(new Obstacle(createVector(400,300),200,50));
    
    this.obstacles.push(new Obstacle(createVector(300,500),50,100));
    
    this.obstacles.push(new Obstacle(createVector(700,300),200,50));
    this.obstacles.push(new Obstacle(createVector(1000,300),200,50));

    
    
}

function draw() {
    
   
    
    if(this.framec<this.lifetime){
        
    background(0);
    this.population.update(this.framec,this.obstacles);
    framec++;
        
    }
    
    else if(this.genPop){
        
        
       this.population.nextGen(this.target);
        //this.genPop = !this.genPop;
        this.framec = 0;
        
    }
    
    fill(240,20,20);
    ellipse(this.target.x,this.target.y,this.targetSize);
    
    fill(0,0,255);
    
    for(var i=0;i<this.obstacles.length;i++){
        
        var obstacle = this.obstacles[i];
        
        rect(obstacle.position.x,obstacle.position.y,obstacle.length,obstacle.breadth);
        
    }
    
}

function mousePressed() {
  this.target.x = mouseX;
  this.target.y = mouseY;
}
