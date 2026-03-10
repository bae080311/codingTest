function solution(sizes) {
    let width = 0;
    let height = 0;
    const repeat = sizes.length;

    for (let i = 0; i < repeat; i++) {
        let big = 0;
        let small = 0;

        if (sizes[i][0] > sizes[i][1]) {
            big = sizes[i][0];
            small = sizes[i][1];
        } else {
            big = sizes[i][1];
            small = sizes[i][0];
        }

        if (big > width) {
            width = big;
        }

        if (small > height) {
            height = small;
        }
    }

    return width * height;
}