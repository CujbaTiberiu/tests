import fs from 'node:fs/promises';

const data = async () => await fs.readFile('./data.txt', 'utf8');

data()
  .then((result) => result.trim().split('\n')
  .map((line) => line.split('   ').map(Number)))
  .then((result) =>{
      const left = result.map(([a]) => a).sort((a, b) => a - b);
      const right = result.map(([_, b]) => b).sort((a, b) => a - b);
      let totalDistance = 0;
      for (let i = 0; i < left.length; i++) {
        totalDistance += Math.abs(left[i] - right[i]);
      }
    
      return totalDistance;
    })
  .then((res) => console.log(res)); 