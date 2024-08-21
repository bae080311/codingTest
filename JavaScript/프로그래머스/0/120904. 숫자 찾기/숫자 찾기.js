function solution(num, k) {
    num = String(num).split(""); 
    for (let i = 0; i < num.length; i++) {  
        if (num[i] == String(k)) { 
            return i + 1;  
        }
    }
    return -1; 
}
