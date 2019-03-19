class Agent {

  constructor(genes) {

    this.size = 20;
    this.dna = new DNA(genes);
    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();
    this.alive = true;

  }


  getF(framec) {

    this.acc.setMag(0);

    if (this.alive) {

      this.applyForce(this.dna.genotype[framec]);
    } else {

      this.vel.setMag(0);

    }

  }

  applyForce(f) {

    this.acc.add(f);

  }

  update() {

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  display() {

    fill(255, 255, 255);
    ellipse(this.pos.x, this.pos.y, this.size);

  }

  die() {

    this.alive = false;

  }

}