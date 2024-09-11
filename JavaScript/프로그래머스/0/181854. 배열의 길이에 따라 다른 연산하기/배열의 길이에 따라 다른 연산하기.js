function solution(arr, n) {
    var answer = [];
    if (arr.length%2===0){
        arr.map((v, i)=>{
            if (i%2!==0){
                answer.push(v+n);
            }
            else {
                answer.push(v);
            }
        })
    }
    else {
        arr.map((v, i)=>{
            if (i%2===0){
                answer.push(n+v);
            }
            else{
                answer.push(v);
            }
        })
    }
    return answer;
}
