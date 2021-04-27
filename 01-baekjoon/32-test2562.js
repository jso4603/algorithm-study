const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const numbers = input.map((x) => Number(x));

    let maxNumber = numbers[0];
    let maxIndex = 0;

    for (let i = 1; i < 9; i++) {
        if (maxNumber < numbers[i]) {
            maxNumber = numbers[i];
            maxIndex = i;
        }
    }

    console.log(maxNumber);
    console.log(maxIndex + 1);

    process.exit();
});
