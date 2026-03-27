const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const tomato = input.slice(1).map((line) => line.split(" ").map(Number));

const queue = [];
let head = 0;

tomato.map((row, i) => {
  row.map((value, j) => {
    if (value === 1) queue.push([i, j]);
  });
});

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

while (head < queue.length) {
  const [x, y] = queue[head++];

  dir.map(([dx, dy]) => {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) return;
    if (tomato[nx][ny] !== 0) return;

    tomato[nx][ny] = tomato[x][y] + 1;
    queue.push([nx, ny]);
  });
}

let answer = 0;
let isZeroLeft = false;

tomato.map((row) => {
  row.map((value) => {
    if (value === 0) isZeroLeft = true;
    answer = Math.max(answer, value);
  });
});

console.log(isZeroLeft ? -1 : answer - 1);
