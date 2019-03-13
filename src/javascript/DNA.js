class DNA {

    constructor(genes) {
        
        this.genes = genes;
        
        this.genotype = [];
        
    }
    
    randomize(){

        for (var i = 0; i < this.genes; i++) {

            this.genotype[i] = p5.Vector.random2D().mult(0.5);

        }

    }
    
}
