class Population {

  constructor(size, genes, mutationRate) {

    this.popul = [];
    this.newPopul = [];
    this.size = size;
    this.newSize = null;
    this.genes = genes;
    this.mutationRate = mutationRate;

    for (var i = 0; i < size; i++) {

      var agent = new Agent(genes);
      agent.dna.randomize();
      this.popul[i] = agent;

    }

  }

  getSize() {
    return this.size;
  }


  update(framec, obstacles) {

    for (var i = 0; i < this.size; i++) {

      var a = this.popul[i];

      for (var j = 0; j < obstacles.length; j++) {

        if (obstacles[j].containsPt(a.pos)) {

          a.die();
          // console.log("Agent no. " + i + " Died");

        }

        obstacles[j].update();

      }

      a.getF(framec);
      a.update();
      a.display();

    }

  }

  nextGen(target, reqPopulSize) {

    this.newSize = reqPopulSize;

    this.calcFitness(target);
    this.crossover();
    this.mutation();

    this.popul = this.newPopul;
    this.size = this.newSize;

    this.matingPool = [];
    this.newPopul = [];

    for (var j = 0; j < obstacles.length; j++) {

      obstacles[j].restore();

    }

  }

  calcFitness(target) {

    this.fitness = [];
    this.matingPool = [];

    for (var i = 0; i < this.size; i++) {

      let fitnessv = this.popul[i].pos;
      fitnessv = p5.Vector.sub(fitnessv, target);
      this.fitness[i] = 10000 / fitnessv.mag();
      if (!this.popul[i].alive) {

        this.fitness[i] = this.fitness[i] / 2;

      }
      this.fitness[i] = floor(this.fitness[i]);

      for (var j = 0; j < this.fitness[i]; j++) {

        this.matingPool.push(this.popul[i]);

      }

    }

  }

  crossover() {

    for (var i = 0; i < this.newSize; i++) {

      var parent1 = random(this.matingPool);
      var parent2 = random(this.matingPool);

      var breakpt = random(this.genes);
      var agent = new Agent(this.genes);

      for (var j = 0; j < this.genes; j++) {

        if (i <= breakpt) {
          agent.dna.genotype[j] = parent1.dna.genotype[j];
        } else {
          agent.dna.genotype[j] = parent2.dna.genotype[j];
        }

      }
      this.newPopul.push(agent);
    }
  }

  mutation() {

    for (var i = 0; i < this.newSize; i++) {

      var mutationCount = 0;

      for (var j = 0; j < this.genes; j++) {

        if (random() < this.mutationRate) {
          this.newPopul[i].dna.genotype[j] = p5.Vector.random2D().mult(0.5);
          mutationCount++;
        }
      }

      //console.log("No. of mutations for agent " + i + " = " + mutationCount);

    }

  }
}