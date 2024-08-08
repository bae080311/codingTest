function solution(n, numlist) {
    let answer = [];
    numlist.filter((item)=>{
        if (item%n===0){
            answer.push(item);
        }
    });
    return answer;
}