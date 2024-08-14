function solution(arr) {
    const result = arr.reduce((prev, cur)=>{
        return prev+cur;
    }, 0)
    return result/arr.length;
}