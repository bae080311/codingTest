function solution(s){
    var answer = true;
    var y =0;
    var p = 0;
    s = s.toLowerCase().split("");
    for (let i = 0; i < s.length;i++){
        if (s[i]==='y'){
            y++;
        }
        if (s[i]==='p'){
            p++;
        }
    }
    if (p.length===0&&y.length===0){
        return true;
    }
    if (p===y){
        return true;
    }
    return false;
}