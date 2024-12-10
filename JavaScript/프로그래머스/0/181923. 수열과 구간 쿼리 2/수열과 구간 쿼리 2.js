function solution(arr, queries) {
    var answer = [];
    for (let i = 0; i < queries.length; i++) {
        const [s, e, k] = queries[i]; 
        let result = [];
        for (let j = s; j <= e; j++) {
            if (arr[j] > k) {
                result.push(arr[j]);
            }
        }
        answer.push(result.length === 0 ? -1 : Math.min(...result));
    }
    return answer;
}
