function solution(a, d, included) {
    var answer = 0;
    let arr = [];
    
    for (let i = 0; i < included.length; i++) {
        arr[i] = a + d * i; 
        
        if (included[i] === true) {  
            answer += arr[i];  
        }
    }
    
    return answer;
}
