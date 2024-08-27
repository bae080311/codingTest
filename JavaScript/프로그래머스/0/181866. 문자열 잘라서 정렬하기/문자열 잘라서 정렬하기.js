function solution(myString) {
    myString = myString.split("x").sort();
    myString = myString.filter(element => element !== "");
    
    return myString;
}
