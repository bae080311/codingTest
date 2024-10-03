function solution(my_string) {
    var answer = [];
    answer = my_string.split(" ");
    answer = answer.filter((v)=>v!=="")
    return answer;
}