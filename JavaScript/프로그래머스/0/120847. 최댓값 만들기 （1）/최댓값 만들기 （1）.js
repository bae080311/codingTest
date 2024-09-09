function solution(numbers) {
    numbers.sort((A, B)=>B-A);
    return numbers[0]*numbers[1];
}