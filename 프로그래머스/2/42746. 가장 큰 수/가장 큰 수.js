function solution(numbers) {
    let answer = [];
    let nums = numbers.map((v) => String(v));

    nums.sort((a, b) => {
        if (a + b > b + a) {
            return -1;
        } else if (a + b < b + a) {
            return 1;
        } else {
            return 0;
        }
    });

    answer = nums.join("");

    if (answer[0] === "0") return "0";
    return answer;
}