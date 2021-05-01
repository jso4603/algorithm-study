const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const X = +line;

    let limit = 1;
    let limitRow = 1;

    while (X > limit) {
        limitRow += 1;
        limit += limitRow;
    }

    let column = 1;
    let row = 1;

    if (limitRow % 2 === 0) {
        row = limit - X + 1;
        column = limitRow - row + 1;
    } else {
        column = limit - X + 1;
        row = limitRow - column + 1;
    }

    console.log(`${column}/${row}`);

    rl.close();
}).on('close', function () {
    process.exit();
});
