const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // 입력받은 문자배열을 숫자배열로 변환
    const N = +input[0];
    let numbers = input[1].split(' ').map(Number);

    let array = [1, 2, 3, 4, 5];
    console.log(...array); // 1 2 3 4 5

    // 최고점 = 과목을 내림차순 한 배열의 마지막 요소
    const M = numbers.sort((a, b) => a - b)[N - 1];

    // 점수를 조작한 점수로 고침
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = (numbers[i] / M) * 100;
    }

    // 점수의 합계(numbers.reduce((a, b) => a + b)) / 과목의 수(N) = 평균(avg)
    const avg = numbers.reduce((a, b) => a + b) / N;

    console.log(avg);

    process.exit();
});
