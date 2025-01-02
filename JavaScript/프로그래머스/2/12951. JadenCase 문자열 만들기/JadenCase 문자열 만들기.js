function solution(s) {
    s = s.split(" ");
    s = s.map((v) => {
        v = v.toLowerCase();          
        v = v.split("");              
        if (v[0]) v[0] = v[0].toUpperCase(); 
        return v.join("");            
    });
    return s.join(" ");             
}
