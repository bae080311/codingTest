function solution(spell, dic) {
    for (let i = 0; i < dic.length; i++) {
        let temp = dic[i].split('');
        for (let j = 0; j < spell.length; j++) {
            let index = temp.indexOf(spell[j]);
            if (index === -1) {
                break;
            }
            temp.splice(index, 1);
        }
        if (temp.length === dic[i].length - spell.length) {
            return 1;
        }
    }
    return 2;
}
