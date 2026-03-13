const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const arr1 = input[1].split(' ').map(Number);
const m = Number(input[2]);
const arr2 = input[3].split(' ').map(Number);

const set = new Set(arr1);
const answer = arr2.map(v => set.has(v) ? 1 : 0);

console.log(answer.join('\n'));