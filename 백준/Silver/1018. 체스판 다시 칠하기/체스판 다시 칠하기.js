const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((v) => v.trim().split(''));

let answer = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let case1 = 0; // 시작이 W
    let case2 = 0; // 시작이 B

    for (let a = 0; a < 8; a++) {
      for (let b = 0; b < 8; b++) {
        const current = board[i + a][j + b];

        if ((a + b) % 2 === 0) {
          if (current !== 'W') case1++;
          if (current !== 'B') case2++;
        } else {
          if (current !== 'B') case1++;
          if (current !== 'W') case2++;
        }
      }
    }

    answer = Math.min(answer, case1, case2);
  }
}

console.log(answer);