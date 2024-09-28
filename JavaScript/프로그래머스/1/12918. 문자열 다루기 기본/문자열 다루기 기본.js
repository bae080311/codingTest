function solution(s) {
    const regex = /^[0-9]{4}$|^[0-9]{6}$/; 
    return s.match(regex) ? true : false;
}