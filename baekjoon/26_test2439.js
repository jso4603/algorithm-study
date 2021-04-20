const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const num = +line;

    // 1번 ==============================================================

    // star = [' ',' ',' ',' ',' ']
    let star = new Array(num).fill(' ');

    for (let i = num - 1; i >= 0; i--) {
        star[i] = '*';
        console.log(star.join(''));
    }

    // =================================================================

    // 2번 ==============================================================

    // let star = '';
    // let blank = '';

    // // i -> 1,2,3,4,5
    // for (let i = 1; i <= num; i++) {
    //     star += '*';
    //     // num - i -> 4,3,2,1,0
    //     for (let j = 0; j < num - i; j++) {
    //         blank += ' ';
    //     }
    //     console.log(blank + star);
    //     blank = '';
    // }

    // =================================================================

    rl.close();
}).on('close', function () {
    process.exit();
});
