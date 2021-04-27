const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // C :테스트 케이스 개수
    const C = +input[0];

    for (let i = 1; i <= C; i++) {
        // 테스트 케이스 숫자들
        const numbers = input[i].split(' ').map(Number);
        // N : 학생의 수
        const N = numbers[0];
        // 학생 점수 총합 = numbers 요소의 총합 - N
        let sum = numbers.reduce((acc, cValue) => acc + cValue, -N); // 초기값은 -N
        // 평균 점수 = 총 점수 / 학생수
        let avg = sum / N;
        // 평균보다 높은 학생 count
        let count = 0;
        for (let j = 1; j <= N; j++) {
            // 학생 점수가 평균보다 높으면
            if (numbers[j] > avg) {
                count++;
            }
        }
        // 평균보다 높은 학생 비율을 백분율(avg*100)로
        // 소수점 3자리까지(toFixed(3)) '%'와 같이 출력
        console.log(((count / N) * 100).toFixed(3) + '%');
    }

    process.exit();
});
