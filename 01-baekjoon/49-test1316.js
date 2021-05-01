const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // N :  단어의 개수
    const N = +input[0];

    // 그룹단어 개수 최기화
    let result = 0;

    for (let i = 1; i <= N; i++) {
        // 그룹단어이면 true 아니면 false
        let isGroupWord = true;
        // 문자를 담을 배열
        let words = [];
        // 문자열의 길이만큼 for문
        for (let j = 0; j < input[i].length; j++) {
            // words 배열에 자신이 없으면 자신을 추가
            if (words.indexOf(input[i][j]) === -1) {
                words.push(input[i][j]);
            } else {
                // words 배열에 자신이 있을 때 words 배열 마지막 글자가 자신이 아닐 경우
                if (words.indexOf(input[i][j]) !== words.length - 1) {
                    isGroupWord = false;
                    break;
                }
            }
        }
        if (isGroupWord) result++;
    }

    console.log(result);

    // ========================== 풀이 1 ==========================

    // // N :  단어의 개수
    // const N = +input[0];

    // // 그룹단어 개수 최기화
    // let result = 0;
    // // 입력받은 단어들만큼 for문
    // for (let i = 1; i <= N; i++) {
    //     // 그룹단어이면 true 아니면 false
    //     let isGroupWord = true;
    //     //  인덱스를 담는 배열
    //     let idxArr = [];
    //     // 문자열의 길이만큼 for문
    //     for (let j = 0; j < input[i].length; j++) {
    //         // 문자열에서 해당문자의 첫번째 인덱스
    //         const idx = input[i].indexOf(input[i][j]);

    //         // 인덱스 배열이 idx를 가지고 있지 않으면 넣어준다
    //         if (!idxArr.includes(idx)) {
    //             idxArr.push(idx);
    //         } else {
    //             // 가지고 있으면 문자의 이전 문자가 자신과 같은지 체크
    //             // 아니면 그룹단어가 아니다.
    //             if (input[i][j] !== input[i][j - 1]) {
    //                 isGroupWord = false;
    //             }
    //         }
    //     }

    //     if (isGroupWord) result++;
    // }

    // console.log(result);

    process.exit();
});
