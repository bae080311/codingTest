function solution(a, b) {
    const answer = String(a) + String(b)
    const answer2 = String(b) + String(a)
    if (answer>=answer2){
        return Number(answer);
    }
    else {
        return Number(answer2);
    }   
}