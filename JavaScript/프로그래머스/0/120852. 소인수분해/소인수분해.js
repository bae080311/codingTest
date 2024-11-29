function solution(n) {
    var answer = [];
    var i = 2;

    while (n > 1) {
        if (n % i === 0) {
            if (!answer.includes(i)) {
                answer.push(i);
            }
            n /= i; 
        } else {
            i++; 
        }
    }
    return answer;
}
