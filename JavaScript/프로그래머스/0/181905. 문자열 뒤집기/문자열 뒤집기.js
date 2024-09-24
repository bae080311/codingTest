function solution(my_string, s, e) {
    let frontstring = my_string.slice(0, s);
    let reverse = my_string.slice(s, e + 1).split("").reverse().join(""); 
    let backstring = my_string.slice(e + 1); 
    return frontstring + reverse + backstring; 
}
