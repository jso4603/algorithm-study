const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // T :  테스트 케이스의 개수
    const T = +input[0];

    for (let i = 0; i < T; i++) {
        let result = '';
        // R : 문자열 반복 수
        const R = +input[i + 1].split(' ')[0];
        // S : 문자열
        const S = input[i + 1].split(' ')[1];
        for (let j = 0; j < S.length; j++) {
            // repeat() : 문자열을 n번 반복
            result += S.split('')[j].repeat(R);
        }
        console.log(result);
    }

    process.exit();
});
