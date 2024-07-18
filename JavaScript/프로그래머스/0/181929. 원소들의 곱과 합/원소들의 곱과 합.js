function solution(num_list) {
    let num = 1;
    let num1 = 0;
    for (let i=0;i<num_list.length;i++){
        num *= num_list[i];
        num1 += num_list[i];
    }
    if (num<num1**2){
        return 1;
    }
    else {
        return 0;
    }
}