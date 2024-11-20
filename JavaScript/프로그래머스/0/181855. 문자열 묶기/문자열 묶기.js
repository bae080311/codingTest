function solution(strArr) {
    var answer = Array(31).fill(0); 

    strArr.forEach(str => {
        answer[str.length]++;
    });

    return Math.max(...answer);
}
