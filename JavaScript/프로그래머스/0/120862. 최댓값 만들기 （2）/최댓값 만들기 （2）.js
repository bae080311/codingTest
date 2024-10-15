function solution(numbers) {
    numbers.sort((A, B)=>A-B);
    return numbers[numbers.length-1] * numbers[numbers.length-2]<numbers[0]*numbers[1]?numbers[0]*numbers[1]:numbers.pop() * numbers.pop();
} 