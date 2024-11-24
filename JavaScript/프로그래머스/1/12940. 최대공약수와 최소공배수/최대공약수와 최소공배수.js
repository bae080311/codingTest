function solution(n, m) {
    var ntemp = n;
    var mtemp = m;

    while (ntemp !== mtemp) {
        if (ntemp < mtemp) {
            ntemp += n;
        } else {
            mtemp += m;
        }
    }

    let min = 1; 
    for (let i = Math.min(n, m); i > 0; i--) {
        if (n % i === 0 && m % i === 0) {
            min = i;
            break;
        }
    }

    return [min, ntemp];
}
