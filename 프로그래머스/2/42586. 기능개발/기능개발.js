function solution(progresses, speeds) {
    let days = [];
    const answer = [];
    let i = 0;
    let temp;
    
    progresses.map((v, i)=>{
        let day = 0;
        while (v < 100) {
            v += speeds[i];
            day++;
        }
        days.push(day);
    })

    
   while (days.length > 0) {
        const first = days[0];
        let count = 0;

        while (days.length > 0 && days[0] <= first) {
            days.shift();
            count++;
        }

        answer.push(count);
    }
    
    return answer;
}