function solution(myString) {
    var answer = [];
    myString = myString.split("x");
    for (let i = 0;i<myString.length;i++){
        answer.push(myString[i].length);
    }
    return answer;
}