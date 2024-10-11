function solution(my_string, is_prefix) {
  for (let i = is_prefix.length-1; i >= 0; i--) {
    if (my_string[my_string.length - is_prefix.length + i] !== is_prefix[i]) {
      return 0;
    }
  }
  return 1;
}
