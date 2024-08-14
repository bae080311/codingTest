function solution(n) {
    var answer = 0;
    n = String(n).split("");
    n.forEach((i)=>{
        answer+=Number(i);
    })
    return answer;
}