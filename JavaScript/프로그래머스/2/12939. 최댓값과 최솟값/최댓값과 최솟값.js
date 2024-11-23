function solution(s) {
    s = s.split(" ");
    s = s.map((v)=>Number(v));
    const min = Math.min(...s);
    const max = Math.max(...s);
    return String(min) + " " + String(max);
}