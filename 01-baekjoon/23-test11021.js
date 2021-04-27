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

    5	      [ '5', [ '1 1' ], [ '2 3' ]
    1 1            , [ '3 4' ], [ '9 8' ], [ '5 2' ] ]
    2 3
    3 4
    9 8
    5 2

    */
    const T = Number(input[0]);

    for (let i = 1; i <= T; i++) {
        let num1 = +input[i].split(' ')[0];
        let num2 = +input[i].split(' ')[1];

        console.log(`Case #${i}: ${num1 + num2}`);
    }

    process.exit();
});
