function solution(people, limit) {
    let answer = 0;
    people.sort((A, B) => A - B);
    
    while (people.length !== 0) {
        let max = people.pop(); 
        if (people.length > 0 && max + people[0] <= limit) {
            people.shift(); 
        }
        answer++;
    }
    
    return answer;
}
