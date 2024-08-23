function solution(my_string) {
    const regex = /[0-9]/g; 
    let numbers = my_string.match(regex);  
    return numbers.reduce((pre, cur) => pre + Number(cur), 0);
}
