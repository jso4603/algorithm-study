const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const N = +line;

    function isHansu(X) {
        // 입력 받은 X를 숫자 배열로 만들어줌
        const numbers = String(X).split('').map(Number);

        // 100 보다 작으면 모두 한수
        if (X < 100) {
            return true;
        } else {
            // 차이값 초기화 ex) 1234 일 경우 2 - 1 = 1 이 초기화
            let distance = numbers[1] - numbers[0];

            // 배열 길이 - 1 만큼 비교  ex> 1234일 경우 2,3 / 3,4 두 번 비교하면 됨.
            for (let i = 1; i < numbers.length - 1; i++) {
                // 차이랑 한번이라도 다를경우 함수를 끝냄.
                if (numbers[i + 1] - numbers[i] !== distance) {
                    return false;
                }
            }
            // for문이 문제 없이 다 돌았을 경우 한수.
            return true;
        }
    }

    let result = 0;

    // 1부터 입력 받은 값 만큼
    for (let i = 1; i <= N; i++) {
        // 결과 값에 true(1)인 만큼 더해준다.
        result += isHansu(i);
    }

    console.log(result);

    rl.close();
}).on('close', function () {
    process.exit();
});
