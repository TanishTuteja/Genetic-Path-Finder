function setup() {
  createCanvas(windowWidth / 2, windowHeight);

  this.lifetime = 150;
  this.defaultPopSize = 100;
  this.defaultMutationRate = 0.01;
  this.genPop = true;

  this.population = new Population(this.defaultPopSize, this.lifetime, this.defaultMutationRate);
  this.framec = 0;

  this.targetSize = 40;
  this.target = createVector(this.targetSize + random(width - 2 * this.targetSize), this.targetSize + random(height - 2 * this.targetSize));
  this.targetSize = 40;

  this.maxObsWidth = width / 4;
  this.maxObsHeight = height / 4;

  this.obstacles = [];

  makeRandomObstacles(3);

  this.headerDiv = createDiv("<h3><center> Modify Parameters </center></h3>");
  this.headerDiv.position(windowWidth / 2, 40);

  this.popSizeDiv = createDiv();
  popSizeDiv.position(windowWidth / 2, 100);
  this.popSizeSpan = createSpan("Population Size (Applicable from next generation): <br>");
  popSizeSpan.parent(popSizeDiv);
  this.popSizeSlider = createSlider(1, 500, this.defaultPopSize, 1);
  this.popSizeSlider.style("margin-left", "10px");
  this.popSizeSlider.parent(popSizeDiv);
  this.popSizeDisplay = createSpan(this.defaultPopSize.toString());
  this.popSizeDisplay.parent(popSizeDiv);

  this.mutationRateDiv = createDiv();
  mutationRateDiv.position(windowWidth / 2, 200);
  this.mutationRateSpan = createSpan("Mutation Rate: <br>");
  mutationRateSpan.parent(mutationRateDiv);
  this.mutationRateSlider = createSlider(0, 1, this.defaultMutationRate, 0.001);
  this.mutationRateSlider.style("margin-left", "10px");
  this.mutationRateSlider.parent(mutationRateDiv);
  this.mutationRateDisplay = createSpan(this.defaultMutationRate.toString());
  this.mutationRateDisplay.parent(mutationRateDiv);

}

function draw() {

  if (this.framec < this.lifetime) {

    background(0);
    this.population.update(this.framec, this.obstacles);
    framec++;

  } else if (this.genPop) {

    this.population.mutationRate = this.mutationRateSlider.value();
    this.population.nextGen(this.target, this.popSizeSlider.value());
    //this.genPop = !this.genPop;
    this.framec = 0;

  }

  fill(240, 20, 20);
  ellipse(this.target.x, this.target.y, this.targetSize);

  fill(0, 0, 255);

  for (var i = 0; i < this.obstacles.length; i++) {

    var obstacle = this.obstacles[i];

    rect(obstacle.position.x, obstacle.position.y, obstacle.length, obstacle.breadth);

  }

  this.popSizeDisplay.html(this.popSizeSlider.value().toString());
  this.mutationRateDisplay.html(this.mutationRateSlider.value().toString());

}

function mousePressed() {
  if (mouseX < width) {
    this.target.x = mouseX;
    this.target.y = mouseY;
  }
}

function makeRandomObstacles(number) {

  for (let i = 0; i < number; i++) {

    let obsWidth = random(maxObsWidth);
    let obsHeight = random(maxObsHeight);

    let x = random(width - obsWidth);
    let y = random(height - obsHeight);

    this.obstacles.push(new Obstacle(createVector(x, y), obsWidth, obsHeight));

  }

}