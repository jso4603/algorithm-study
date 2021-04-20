const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    // 1번 ==============================================================

    const num = +line;
    let star = '';

    for (let i = 1; i <= num; i++) {
        star += '*';
        console.log(star);
    }

    // =================================================================

    // 2번 ==============================================================

    // const num = +line;

    // let star = new Array(num);

    // for (let i = 0; i < star.length; i++) {
    //     star[i] = '*';
    //     console.log(star.join(''));
    // }

    // =================================================================

    rl.close();
}).on('close', function () {
    process.exit();
});
