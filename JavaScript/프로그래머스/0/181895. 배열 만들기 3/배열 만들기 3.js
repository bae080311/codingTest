function solution(arr, intervals) {
    let answer = [];
    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0]; j <= intervals[i][1]; j++) {
            answer.push(arr[j]);
        }
    }
    return answer;
}
