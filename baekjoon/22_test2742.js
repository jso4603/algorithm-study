// 1번 ==============================================================

let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = input; i >= 1; i--) {
    answer += i + '\n';
}

console.log(answer);

// =================================================================

// 2번 ==============================================================

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on('line', function (line) {
//     const num = Number(line);

//     for (let i = num; i >= 1; i--) {
//         console.log(i);
//     }

//     rl.close();
// }).on('close', function () {
//     process.exit();
// });

// =================================================================
