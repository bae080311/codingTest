function solution(n) {
    let factorial = 1; 
    var answer = 1;        

    while (factorial * (answer + 1) <= n) { 
        answer++;
        factorial *= answer;
    }

    return answer;
}
