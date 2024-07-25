function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let gop = 1;
    for (let i =0;i<num_list.length;i++){
        sum += num_list[i];
        gop *= num_list[i];
    }
    if (num_list.length>=11){
        return sum;
    }
    else {
        return gop;
    }
}