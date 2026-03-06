const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

function solution(N){
    let three = 0;

    for (let five = Math.floor(N / 5); five >= 0; five--){
        for (three = 0; three * 3 + five * 5 <= N; three++){
            if (three * 3 + five * 5 === N) return three + five;
        }
    }

    return -1;
}

console.log(solution(N));