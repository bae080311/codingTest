function solution(slice, n) {
    let result = 1;
    while ((result * slice) < n) {
        result++;
    }
    return result;
}
