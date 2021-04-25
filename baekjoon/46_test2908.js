const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    // 입력 받은 문자를 나눔
    let numbers = line.split(' ');

    // 입력받은 문자를 나눠서 배열에 넣고 역순으로 정렬하고 다시 string으로 만들어준다.
    // + : string값을 number로 치환
    let num1 = +numbers[0].split('').reverse().join('');
    let num2 = +numbers[1].split('').reverse().join('');

    // Math.max 를 이용하여 최대값 호출
    console.log(Math.max(num1, num2));

    rl.close();
}).on('close', function () {
    process.exit();
});
