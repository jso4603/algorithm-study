const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    // 입력 받은 문자를 나눔
    const alphabets = line.split('');

    // dial object 생성
    const dial = {
        2: ['A', 'B', 'C'],
        3: ['D', 'E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'Q', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y', 'Z'],
    };

    // 모든 숫자는 걸기 위해서 1초씩 더 걸리기에 미리 알파벳 길이로 초기화
    let minTime = alphabets.length;

    for (let i = 0; i < alphabets.length; i++) {
        for (number in dial) {
            // 해당 key의 value가 알파벳을 포함하고 있으면 key의 number 값을 minTime에 더해준다.
            if (dial[number].includes(alphabets[i])) {
                minTime += +number;
            }
        }
    }

    console.log(minTime);

    // ================================= 내 풀이 ============================================

    // // 모든 숫자는 걸기 위해서 1초씩 더 걸린다.
    // let minTime = alphabets.length;

    // for (let i = 0; i < alphabets.length; i++) {
    //     const ascii = alphabets[i].charCodeAt();

    //     if (ascii <= 'C'.charCodeAt()) {
    //         minTime += 2;
    //     } else if (ascii <= 'F'.charCodeAt()) {
    //         minTime += 3;
    //     } else if (ascii <= 'I'.charCodeAt()) {
    //         minTime += 4;
    //     } else if (ascii <= 'L'.charCodeAt()) {
    //         minTime += 5;
    //     } else if (ascii <= 'O'.charCodeAt()) {
    //         minTime += 6;
    //     } else if (ascii <= 'S'.charCodeAt()) {
    //         minTime += 7;
    //     } else if (ascii <= 'V'.charCodeAt()) {
    //         minTime += 8;
    //     } else if (ascii <= 'Z'.charCodeAt()) {
    //         minTime += 9;
    //     }
    // }

    // console.log(minTime);

    rl.close();
}).on('close', function () {
    process.exit();
});
