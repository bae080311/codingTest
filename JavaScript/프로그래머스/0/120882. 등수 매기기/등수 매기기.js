function solution(score) {
    let sum = score.map(arr => arr.reduce((cur, pre) => cur + pre, 0) / arr.length);
    let result = [...sum].sort((a, b) => b - a); 
    return sum.map(v => result.indexOf(v) + 1);
}
