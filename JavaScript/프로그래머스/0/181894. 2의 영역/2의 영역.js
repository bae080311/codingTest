function solution(arr) {
    if (arr.includes(2)){
        var num = arr.indexOf(2);
        var num1 = arr.lastIndexOf(2);
        return arr.slice(num, num1+1);
    }
    else{
        return [-1];
    }
}