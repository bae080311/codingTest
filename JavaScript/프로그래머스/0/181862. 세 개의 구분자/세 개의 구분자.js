function solution(myStr) {
    var answer = myStr.split("a"); 
    answer = answer.flatMap(v => v.split("b")); 
    answer = answer.flatMap(v => v.split("c")); // 배열이 두개 안생기고 하나로 된다
    answer = answer.filter((v) => v !== ""); 
    return answer.length === 0 ? ["EMPTY"] : answer; 
}
