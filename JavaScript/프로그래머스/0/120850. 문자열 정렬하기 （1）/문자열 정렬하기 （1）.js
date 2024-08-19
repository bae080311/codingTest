function solution(my_string) {
    var answer = [];
    my_string = my_string.split(''); 
    my_string.filter(i => {
        if (!isNaN(i)) { 
            answer.push(Number(i));  
        }
    });
    return answer.sort();  
}
