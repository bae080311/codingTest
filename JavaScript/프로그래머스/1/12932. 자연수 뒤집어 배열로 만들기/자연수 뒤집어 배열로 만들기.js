function solution(n) {
    n = String(n).split("");
    n = n.reverse();         
    return n.map(Number);
}
