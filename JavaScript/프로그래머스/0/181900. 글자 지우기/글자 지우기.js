function solution(my_string, indices) {
    my_string = my_string.split("");
    my_string = my_string.filter((v, index) => !indices.includes(index));
    
    return my_string.join("");
}

