function solution(sides) {
    sides.sort((A, B) => A - B);
    return sides[2] >= (sides[0] + sides[1]) ? 2 : 1;
}
