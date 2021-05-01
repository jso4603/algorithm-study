const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    // 입력 받은 문자를 나눔
    const numbers = line.split(' ').map(Number);

    // 고정비용
    const fixedCost = numbers[0];
    // 가변비용
    const variableCost = numbers[1];
    // 가격
    const price = numbers[2];
    // 이익
    const profit = price - variableCost;

    // 이익이 없으면 -1
    if (profit <= 0) {
        console.log(-1);
    } else {
        // 고정비용을 이익으로 나눈 값에 + 1 을 하면 손익분기점
        let breakEvenPoint = Math.floor(fixedCost / profit) + 1;

        console.log(breakEvenPoint);
    }

    // ========================== 풀이 1 ==========================

    // // 입력 받은 문자를 나눔
    // const numbers = line.split(' ').map(Number);

    // const fixedCost = numbers[0];
    // const variableCost = numbers[1];
    // const price = numbers[2];

    // if (variableCost >= price) {
    //     console.log(-1);
    // } else {
    //     let salesNum = 1;

    // // 주어지는 최대값이 21억 이하의 자연수라서 while문을 돌리면 시간초과
    //     while (fixedCost + variableCost * salesNum >= price * salesNum) {
    //         salesNum++;
    //     }

    //     console.log(salesNum);
    // }

    rl.close();
}).on('close', function () {
    process.exit();
});
