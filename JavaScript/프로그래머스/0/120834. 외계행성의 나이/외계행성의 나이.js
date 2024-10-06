function solution(age) {
    const convert = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var answer = "";
    const realage = String(age).split("");
    realage.map((v)=>{
        v = Number(v);
        answer += convert[v];
    })
    return answer;
}