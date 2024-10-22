function solution(a, b) {
    let sum = 0;
    if (a%2==0&&b%2==0){
        sum += (a-b)
    }else if (a%2==1&&b%2==1){
        sum += ((a * a) + (b*b));
    }else{
        sum += 2*(a+b);
    }
    return sum>0?sum:-sum;
}