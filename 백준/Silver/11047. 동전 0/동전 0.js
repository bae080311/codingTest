const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let sum = 0;
let [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

for (let i = coins.length - 1; i >= 0; i--) {
    if (k === 0) break;

    while (k >= coins[i]) {
        k -= coins[i];
        sum++;
    }
}

console.log(sum);