function solution(n) {
    var answer = [];
    while (n !== 1) {
        answer.push(n);
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }
    answer.push(1); 
    return answer;
}
