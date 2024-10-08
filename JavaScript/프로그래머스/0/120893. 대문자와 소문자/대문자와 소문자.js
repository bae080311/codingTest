function solution(my_string) {
    var answer = [];
    my_string = my_string.split("");
    my_string.map((v) => {
         answer.push(v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase());
    });
    return answer.join("");
}
