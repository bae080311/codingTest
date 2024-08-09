function solution(n) {
    var answer = [];
    for (let i = n;i>0;i--){
        if (i%2!==0){
            answer.push(i);
        }
    }
    return answer.reverse();
}