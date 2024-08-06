function solution(order) {
    let pay = 0;
    for (let i = 0;i<order.length;i++){
        switch(order[i]) {
        case "iceamericano":
        case "americanoice":
        case "hotamericano":
        case "americanohot":
            pay += 4500;
            break;
        case "cafelatteice":
        case "icecafelatte":
        case "hotcafelatte":
        case "cafelattehot":
            pay += 5000;
            break;
        case "americano":
            pay += 4500;
            break;
        case "cafelatte":
            pay += 5000;
            break;
        case "anything":
            pay += 4500;
            break;
    }
    }
    return pay;
}