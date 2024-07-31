function solution(my_string, alp) {
    const charArray = my_string.split('');
    const modifiedArray = charArray.map((char) => {
        if (char === alp) {
            return char.toUpperCase();
        }
        return char;
    });
    const answer = modifiedArray.join('');
    return answer;
}
