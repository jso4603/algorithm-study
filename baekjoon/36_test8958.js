const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // 입력받을 횟수
    const count = +input[0];

    for (let i = 1; i <= count; i++) {
        // 점수와 보너스점수 초기화
        let score = 0;
        let bonus = 0;

        // 입력받은 OX퀴즈 결과
        const result = input[i].split('');

        for (let j = 0; j < result.length; j++) {
            // 맞았을 경우
            if (result[j] === 'O') {
                // 점수 에 1점 과 보너스를 더해준다.
                score += 1 + bonus;
                // 보너스 점수가 1점 오른다.
                bonus++;
            } else {
                // 보너스 점수 초기화
                bonus = 0;
            }
        }
        console.log(score);
    }

    process.exit();
});
