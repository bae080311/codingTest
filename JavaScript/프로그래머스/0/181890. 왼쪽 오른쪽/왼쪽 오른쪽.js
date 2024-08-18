function solution(str_list) {
    var l = str_list.indexOf("l");
    var r = str_list.indexOf("r");

    if (l !== -1 && (r === -1 || l < r)) {
        return str_list.slice(0, l);
    }
    
    if (r !== -1 && (l === -1 || r < l)) {
        return str_list.slice(r + 1);
    }
    
    return [];
}
