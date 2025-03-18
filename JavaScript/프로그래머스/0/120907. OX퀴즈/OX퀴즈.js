function solution(quiz) {
    let result = [];
    quiz.map((v)=>{
        v = v.split("=");
        result.push(eval(v[0]) == eval(v[1]) ? "O" : "X");
    })
    return result;
}