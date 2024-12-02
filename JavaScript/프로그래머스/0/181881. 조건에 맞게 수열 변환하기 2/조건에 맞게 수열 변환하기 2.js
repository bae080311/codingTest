function solution(arr) {
    var count = 0; 
    var pre = [...arr]; 
    while (true) {
        arr = arr.map((v) => {
            if (v >= 50 && v % 2 === 0) {
                return v / 2;
            } else if (v < 50 && v % 2 !== 0) {
                return v * 2 + 1;
            }
            return v;
        });
        let same = true;
        for (let i = 0; i < pre.length; i++) {
            if (pre[i] !== arr[i]) {
                same = false;
                break;
            }
        }
        if (same) {
            break; 
        }
        pre = [...arr]; 
        count++; 
    }
    return count; 
}
