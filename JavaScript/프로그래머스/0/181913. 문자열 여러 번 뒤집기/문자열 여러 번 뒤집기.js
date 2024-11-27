function solution(my_string, queries) {
    my_string = my_string.split("");
    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        while (start < end) {
            let temp = my_string[start];
            my_string[start] = my_string[end];
            my_string[end] = temp;
            start++;
            end--;
        }
    }
    return my_string.join("");
}
