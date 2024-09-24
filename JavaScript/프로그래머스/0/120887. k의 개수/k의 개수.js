function solution(i, j, k) {
    let result = 0;
    let kStr = String(k); 
    
    for (let e = i; e <= j; e++) {
        result += (String(e).split(kStr).length - 1);
    }
    
    return result;
}
