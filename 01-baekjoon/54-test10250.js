const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // T :  테스트 데이터 개수
    const T = +input[0];

    for (let i = 1; i <= T; i++) {
        // 호텔의 층 수
        const H = input[i].split(' ').map(Number)[0];
        // 각 층의 방 수
        const W = input[i].split(' ').map(Number)[1];
        // 몇 번째 손님인지
        const N = input[i].split(' ').map(Number)[2];

        let answer = '';

        // 층수로 나눠지는 경우 해당 층이 앞에 붙는다.
        // 6층이 최대일 경우 6,12,18번째는 전부 6층
        // 나머지는 나눴을 때 나머지 값
        if (N % H === 0) {
            answer = H;
        } else {
            answer = String(N % H);
        }

        // 나눴을 때 몫이 10보다 낮으면 0을 붙인다
        if (Math.ceil(N / H) < 10) {
            answer += '0' + String(Math.ceil(N / H));
        } else {
            answer += String(Math.ceil(N / H));
        }

        console.log(answer);
    }

    process.exit();
});
