function solution(num_str) {
    var answer = 0;
     num_str=num_str.split("");
    num_str.map((i)=>{
        answer += Number(i);
    })
    return answer;
}