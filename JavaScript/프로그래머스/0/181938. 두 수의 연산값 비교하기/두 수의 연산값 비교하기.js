function solution(a, b) {
    var answer = 0;
    // 문자열 결합 후 숫자로 변환
    var value = Number(a.toString() + b.toString());
    var value1 = 2 * a * b;
    
    if (value >= value1) {
        answer = value;
    } else {
        answer = value1;
    }
    
    return answer;
}
