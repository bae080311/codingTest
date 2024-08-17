function solution(n) {
    let sqrt = Math.sqrt(n);
    return sqrt % 1 === 0 ? (sqrt + 1) * (sqrt + 1) : -1;
}
