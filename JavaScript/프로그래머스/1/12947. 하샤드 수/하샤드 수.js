function solution(x) {
    const temp = String(x).split("").map(Number);
    const sum = temp.reduce((pre, cur) => pre + cur, 0);
    return x % sum === 0;
}
