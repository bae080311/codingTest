function solution(my_string) {
    var answer = [];
    my_string = my_string.split("");
    for (let i = 0; i < my_string.length; i++) {
        if (!answer.includes(my_string[i])) {  
            answer.push(my_string[i]);
        }
    }
    return answer.join(""); 
}
