function solution(n) {
    var Num = String(n).split("").map(Number);  
    var answer = Num.reduce((pre, cur) => pre + cur, 0); 
    return answer;
}
