// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomNum = Math.floor(Math.random() * 15);
      const baseSel = this.dna[randomNum];
      let newBaseSel = returnRandBase();
      if (newBaseSel === baseSel) {
        newBaseSel = returnRandBase();
      } 
      // console.log(randomNum)
      // console.log(baseSel)
      // console.log(newBaseSel);
      this.dna[randomNum] = newBaseSel;
      return this.dna;
    },
    compareDNA(passedInDNA) {
      const matchedBase = [];
      for(let i = 0; i < this.dna.length; i++) {
        for(let j = 0; j < passedInDNA.dna.length; j++) {
          
        }
        if (this.dna[i] === passedInDNA.dna[i]) {
          console.log(i)
          matchedBase.push(this.dna[i]);
          }
      }
      console.log(matchedBase.length)
      const percentageMatch = (matchedBase.length/this.dna.length) * 100;
      return `specimen #${specimenNum} and specimen #${passedInDNA.specimenNum} have ${percentageMatch.toFixed(2)}% DNA in common`;
    },
    willLikelySurvive() {
      let noOfCsOrGs = 0;
      this.dna.forEach(dna => {
        if (dna === 'C' || dna === 'G') {
          return noOfCsOrGs++
        }
      })
      console.log(noOfCsOrGs)
      const survivalPercent = (noOfCsOrGs/15) * 100;
      if (survivalPercent >= 60) {
        return true;
      } else return false;
    }
  }
}

const arrayOfDNAs = [];

const createDNAs = (num) => {
  if (typeof num === 'number' && num > 0) {
    for(let i = 0; i < num; i++) {
      arrayOfDNAs.push(pAequorFactory(i + 1, mockUpStrand()));
    }
  }
  return arrayOfDNAs;
}

createDNAs(30);
console.log(arrayOfDNAs);