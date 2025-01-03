function solution(s) {
    s = s.split("");
    let open = 0;
    let close = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            open++;
        } else if (s[i] === ")") {
            close++;
        }
        if (close > open) {
            return false;
        }
    }
    if (s[0] === ")" || s[s.length - 1] === "(") {
        return false;
    }
    return open === close;
}
