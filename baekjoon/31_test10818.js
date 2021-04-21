const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    /*

    5	             [ '5', [ '20 10 35 30 7' ] ]
    20 10 35 30 7

    */

    const N = Number(input[0]);
    const numbers = input[1].split(' ').map(Number);

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < N; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }

        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    console.log(min, max);

    process.exit();
});
