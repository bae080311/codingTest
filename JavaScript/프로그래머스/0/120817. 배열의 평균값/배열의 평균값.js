function solution(numbers) {
    const sum = numbers.reduce((cur, pre) => cur + pre, 0);
    return sum/numbers.length;
}
