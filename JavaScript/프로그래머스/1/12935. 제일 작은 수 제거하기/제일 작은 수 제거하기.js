function solution(arr) {
    const i = Math.min(...arr); 
    arr.splice(arr.indexOf(i), 1); 
    return arr.length < 1 ? [-1] : arr; 
}
