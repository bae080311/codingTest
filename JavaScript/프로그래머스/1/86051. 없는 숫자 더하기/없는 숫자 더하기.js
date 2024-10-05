function solution(numbers) {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
    for (let i = 0; i < number.length; i++) {
        if (!numbers.includes(number[i])) {
            answer += number[i];
        }
    }
    return answer;
}
