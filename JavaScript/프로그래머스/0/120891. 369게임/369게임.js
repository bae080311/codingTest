function solution(order) {
    order = String(order).split("");
    
    const count = order.filter((char) => {
        return char === '3' || char === '6' || char === '9';
    }).length;
    
    return count;
}
