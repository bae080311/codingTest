function solution(l, r) {
    let result = [];

    for (let i = l; i <= r; i++) {
        if ([...String(i)].every(v =>v=== "0" ||v==="5")) {
            result.push(i);
        }
    }

    return result.length !== 0 ? result : [-1];
}
