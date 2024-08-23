function solution(strlist) {
    var answer = [];
    strlist.filter(i=>{
        answer.push(i.length);
    })
    return answer;
}