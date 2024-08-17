function solution(my_string) {
    my_string = my_string.split(" ");
    let result = Number(my_string[0]);
    for (let i = 1; i < my_string.length; i += 2) {
        let operator = my_string[i];     
        let nextNumber = Number(my_string[i + 1]);
        if (operator === '+') {
            result += nextNumber;
        } else if (operator === '-') {
            result -= nextNumber;
        }
    }
    
    return result;
}