const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    // 반복문을 쓰면 시간초과가 됨으로 주의
    // 입력 받은 문자를 나눔
    const numbers = line.split(' ').map(Number);

    // 낮에 움직이는 길이
    const dayMove = numbers[0];
    // 밤에 움직이는 길이
    let nightMove = numbers[1];
    // 결승점
    let endPoint = numbers[2];

    // 마지막 날을 제외하고 얼마만큼 날짜가 필요한 지 구한다.
    const needDay = Math.ceil((endPoint - dayMove) / (dayMove - nightMove));
    console.log(needDay + 1);

    rl.close();
}).on('close', function () {
    process.exit();
});
