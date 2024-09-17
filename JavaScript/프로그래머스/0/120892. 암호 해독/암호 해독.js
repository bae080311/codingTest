function solution(cipher, code) {
    cipher=cipher.split("");
    return cipher.filter((v, i)=>(i+1)%code===0).join("");
}