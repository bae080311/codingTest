function solution(num_list) {
    var newValue;
    
    if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
        newValue = num_list[num_list.length - 1] - num_list[num_list.length - 2];
    } else {
        newValue = num_list[num_list.length - 1] * 2;
    }
    num_list.push(newValue);
    
    return num_list;
}
