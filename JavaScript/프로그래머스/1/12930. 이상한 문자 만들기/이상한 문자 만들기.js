function solution(s) {
    return s.split(" ").map(v => 
        v.split("").map((val, i) => 
            i % 2 === 0 ? val.toUpperCase() : val.toLowerCase()
        ).join("")
    ).join(" ");
}
