function solution(sequence, k) {
    let answer = [0, sequence.length - 1];
    let min = sequence.length;
    
    let start = 0;
    let sum = 0;
    
    for (let end = 0; end < sequence.length; end++) {
        sum += sequence[end];
        
        while (sum > k) {
            sum -= sequence[start];
            start++;
        }
        
        if (sum === k) {
            if (end - start < min) {
                min = end - start;
                answer = [start, end];
            }
        }
    }
    
    return answer;
}