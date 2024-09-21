function solution(rsp) {
    rsp = rsp.split("");
    rsp = rsp.map(v => {
        if (v === "2") return "0";
        if (v === "0") return "5";
        if (v === "5") return "2";
    });
    return rsp.join("");
}
