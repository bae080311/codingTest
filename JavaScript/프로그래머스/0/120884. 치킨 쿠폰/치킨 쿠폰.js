function solution(chicken) {
    var answer = 0;
    while (chicken >= 10) {
        let service = Math.floor(chicken / 10);
        answer += service; 
        chicken = service + (chicken % 10); 
    }
    return answer;
}
