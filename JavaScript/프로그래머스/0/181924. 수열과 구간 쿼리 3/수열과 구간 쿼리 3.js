function solution(arr, queries) {
  for (let k = 0; k < queries.length; k++) {
    let i = queries[k][0];
    let j = queries[k][1];
    if (i !== j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}
