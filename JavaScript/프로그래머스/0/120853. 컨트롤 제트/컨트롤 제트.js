function solution(s) {
    var answer = 0;
    s = s.split(" ");
    s.filter((v, i)=>{
        if (v==='Z'){
            answer -= Number(s[i-1]);
        }
        else {
            answer += Number(v);
        }
    })
    return answer;
}