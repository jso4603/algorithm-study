const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (input) {
    // 입력받은 String을 Number로
    let inputNumber = +input;

    // 왼쪽 숫자에 입력받은 숫자 ex) 26 / 오른쪽 숫자와 사이클의 길이는 0으로 초기화
    let leftNumber = inputNumber;
    let newNumber = 0;
    let cycle = 0;

    for (let i = 0; ; i++) {
        // 왼쪽 10의자리 수 + 1의자리 수 = 오른쪽 숫자 ex) 2 + 6 = 8
        let rightNumber = Math.floor(leftNumber / 10) + (leftNumber % 10);

        // ex) 왼쪽 1의자리 수 * 10 + 오른쪽 1의자리 수 = 새로운 숫자 ex) 2'6' + 0'8' = 68
        newNumber = (leftNumber % 10) * 10 + (rightNumber % 10);

        // 새로 구한 숫자를 왼쪽 숫자로 교체
        leftNumber = newNumber;

        // 사이클 1회 증가
        cycle++;

        // 새로운 숫자와 입력받은 숫자가 같으면 종료
        if (inputNumber === newNumber) {
            break;
        }
    }

    console.log(cycle);

    rl.close();
}).on('close', function () {
    process.exit();
});
