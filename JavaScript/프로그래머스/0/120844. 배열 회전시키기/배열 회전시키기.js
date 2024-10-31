function solution(numbers, direction) {
    const count = numbers.length - 1;
    if (direction === "right") {
        let last = numbers[count];
        for (let i = count; i > 0; i--) {
            numbers[i] = numbers[i - 1];
        }
        numbers[0] = last;
    } else {
        let first = numbers[0];
        for (let i = 0; i < count; i++) {
            numbers[i] = numbers[i + 1];
        }
        numbers[count] = first;
    }
    return numbers;
}
