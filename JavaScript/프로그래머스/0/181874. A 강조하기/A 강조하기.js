function solution(myString) {
    var answer = '';
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'a') {
            answer += 'A';
        } else if (myString[i] !== 'A' && myString[i] === myString[i].toUpperCase()) {
            answer += myString[i].toLowerCase();
        } else {
            answer += myString[i];
        }
    }
    return answer;
}
