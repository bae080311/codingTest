function solution(arr) {
    let length=1;
    while (length<arr.length){
        length*=2;
    }
    while(arr.length<length){
        arr.push(0);
    }
    return arr;
}