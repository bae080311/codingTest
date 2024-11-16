function solution(emergency) {
    var answer = [];
    for (let i = 0;i<emergency.length;i++){
        const idx = emergency.indexOf(Math.max(...emergency));
        answer[idx] = i+1;
        emergency[idx] = 0;
    }
    return answer;
}