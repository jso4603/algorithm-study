const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // N : N 개의 숫자
    const N = +input[0];

    let result = 0;
    for (let i = 0; i < N; i++) {
        result += +input[1].split('')[i];
    }

    console.log(result);

    process.exit();
});
