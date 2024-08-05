function solution(babbling) {
    return babbling.filter(word => {
        const regular = /^(aya|ma|woo|ye)+$/;
        return regular.test(word);
    }).length;
}
