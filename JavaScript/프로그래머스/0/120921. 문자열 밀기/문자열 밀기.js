function solution(A, B) {
    if (A === B) return 0;
    let cnt = 0;    
    for (let i = 0; i < A.length; i++) {
        A = A[A.length - 1] + A.slice(0, A.length - 1); 
        cnt++;
        if (A === B) return cnt; 
    }
    
    return -1; 
}