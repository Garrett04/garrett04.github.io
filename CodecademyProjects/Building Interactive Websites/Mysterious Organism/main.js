// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      console.log(`Mutation of specimen${this.specimenNum} of DNA: ${this.dna}`);
      let index = Math.floor(Math.random() * dna.length);
      console.log(`Index of the base to change: ${index}`);
      let randomBase = returnRandBase();

      while (randomBase === dna[index]) {
        randomBase = returnRandBase();
      }
      dna.splice(index, 1, randomBase);
      return this.dna;
    },
    compareDNA(pAequorObj) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequorObj.dna[i]) {
          // console.log(`${this.dna[i]} and ${pAequorObj.dna[i]} are equal`);
          count += 1;
          // console.log(`Number of matches: ${count}`);
        }    
      }
      let result = Math.floor((100 / 15) * count);
      console.log(`specimen #${pAequor1.specimenNum} and specimen #${pAequor2.specimenNum} have ${result}% DNA in common`);
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          // console.log(`specimen #${this.specimenNum} has a match of C or G`);
          count += 1;
          // console.log(`Number of matches: ${count}`);
        }
      }
      let result = Math.floor((100 / 15) * count);
      if (result >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      let newDNAStrand = [];
      console.log(this.dna);
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'A') {
          newDNAStrand.push('T');
        } else if (this.dna[i] === 'C') {
          newDNAStrand.push('G');
        } else if (this.dna[i] === 'G') {
          newDNAStrand.push('C');
        } else {
          newDNAStrand.push('A')
        }
        // console.log(newDNAStrand);
      }
      return newDNAStrand;
    }
  }
}

let storeSurvivingDNA = () => {
  let survivingDNA = [];
  for (let i = 0; i < 30; i++) {
    let pAequor = pAequorFactory(i, mockUpStrand());
    if (pAequor.willLikelySurvive() === true) {
      survivingDNA.push(pAequor);
    }
  }
  return survivingDNA;
}

console.log('An array of surviving DNA:'); // An array of 30 instances of DNA that can survive in their natural environment. 
console.log(storeSurvivingDNA());

let pAequor1 = pAequorFactory(1, mockUpStrand()); // Test DNA
console.log(pAequor1.complementStrand());