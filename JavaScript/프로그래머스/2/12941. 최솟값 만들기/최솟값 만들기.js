function solution(A,B){
    let sum = 0;
    A.sort((A, B)=>A-B);
    B.sort((A, B)=>B-A);
    A.map((v, i)=>{
        sum += v * B[i];
    })
    return sum;
}