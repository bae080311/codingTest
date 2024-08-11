function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach((v, i) => {
        i % 2 === 0 ? even += v : odd += v;
    });
    return even > odd ? even : odd;
}
