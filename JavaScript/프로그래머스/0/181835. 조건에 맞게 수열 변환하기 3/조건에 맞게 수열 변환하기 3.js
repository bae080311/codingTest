function solution(arr, k) {
    if (k % 2 === 0) {
        arr = arr.map(cur => cur + k);
    } else {
        arr = arr.map(cur => cur * k);
    }
    return arr;
}
