function solution(array, n) {
    const temp = array.map(v => v>n?v-n:n-v); 
    const min = Math.min(...temp); 
    const index = temp.indexOf(min); 

    temp[index] = 100;
    const index2 = temp.indexOf(min); 
    if (index2 === -1) {
        return array[index];
    } else {
        return Math.min(array[index], array[index2]);
    }
}
