function solution(my_string) {
    let answer = 0;
    const numbers = my_string.match(/[0-9]+/g); 
    if (numbers) {
        numbers.forEach(num => {
            answer += Number(num);
        });
    }
    return answer;
}