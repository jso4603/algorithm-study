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
    let numbers = input.map(Number);

    // 각 숫자를 42로 나눠줌
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] % 42;
    }

    // 중복 되는 값을 Set으로 삭제
    numbers = [...new Set(numbers)];

    console.log(numbers.length);

    process.exit();
});
