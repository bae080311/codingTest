function solution(my_str, n) {
    var answer = [];
    const count = Math.ceil(my_str.length / n);
    for (let i = 1; i <= count; i++) {
        answer.push(my_str.substring((i - 1) * n, i * n));
    }
    return answer;
}
