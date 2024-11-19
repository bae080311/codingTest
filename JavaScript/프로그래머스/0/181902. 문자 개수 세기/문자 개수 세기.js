function solution(my_string) {
    let answer = Array(52).fill(0);  
    my_string.split("").forEach(v => {
        if (v >= 'A' && v <= 'Z') {
            answer[v.charCodeAt(0) - 'A'.charCodeAt(0)]++;  
        } else {
            answer[v.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++; 
        }
    });
    
    return answer;
}
