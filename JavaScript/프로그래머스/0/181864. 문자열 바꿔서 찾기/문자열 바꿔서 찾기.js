function solution(myString, pat) {
  myString = myString.replaceAll("A", "a");
  myString = myString.replaceAll("B", "A");
  myString = myString.replaceAll("a", "B");

  return myString.includes(pat) ? 1 : 0;
}
