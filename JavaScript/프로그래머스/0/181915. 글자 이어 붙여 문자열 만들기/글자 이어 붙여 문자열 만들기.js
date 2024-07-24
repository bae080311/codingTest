function solution(my_string, index_list) {
    var answer = '';
    my_string = my_string.split("");
    for (let i = 0; i < index_list.length; i++) {
        answer += my_string[index_list[i]];
    }
    return answer;
}
