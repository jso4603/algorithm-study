const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const number = +line;

    // 최대 범위
    const limit = 1;
    // 6에 곱해줄 숫자
    const cnt = 1;

    // 입력받은 숫자가 최대 범위보다 높으면 limit을 6 * cnt 만큼 늘려준다.
    while (number > limit) {
        // limit => 1,7,19,37,61...
        limit += 6 * cnt++;
    }

    console.log(cnt);

    rl.close();
}).on('close', function () {
    process.exit();
});
