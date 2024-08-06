function solution(myString) {
    var answer = '';
    myString = myString.split("");
    myString.filter((i) => {
        if (i < "l") {
            i = "l";
        }
        answer += i;
    });
    return answer;
}
