function solution(my_string, m, c) {
  const temp = [];
  
  for (let i = 0; i < my_string.length; i += m) {
    temp.push(my_string.slice(i, i + m));
  }
  let answer = '';
  for (let i = 0; i < temp.length; i++) {
    if (temp[i][c - 1]) {  
      answer += temp[i][c - 1];
    }
  }
  
  return answer;
}
