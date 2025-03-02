function solution(sides) {
    let caseNumber = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    for (let i = max + min - 1; i >= max - min + 1; i--) {
        caseNumber++;
    }
    
    return caseNumber;
}
