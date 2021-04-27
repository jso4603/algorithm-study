const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const word = line.toLowerCase();
    // 알파벳 a ~ z의 개수를 저장 할 배열을 0으로 채워줌
    const result = new Array(26).fill(0);

    // console.log('a'.charCodeAt()); // 97

    for (let i = 0; i < word.length; i++) {
        // ex) a = 97 => result[0] 에 1을 더해줌
        result[word.charCodeAt(i) - 97]++;
    }

    // result에서 가장 큰 수 = 빈도수가 높은 문자 수
    const maxCount = Math.max(...result);
    // 빈도수가 가장 높은 수의 첫번째 인덱스
    const maxIndex = result.indexOf(maxCount);

    // 빈도수가 가장 높은 수 의 첫번째와 마지막 인덱스가 같다면 유일한 문자
    // 아니면 다른 문자가 있으므로 ?
    if (maxIndex === result.lastIndexOf(maxCount)) {
        console.log(String.fromCharCode(maxIndex + 65));
    } else {
        console.log('?');
    }

    // ============================ 내 풀이 ============================

    // // 입력받은 문자를 소문자로 치환
    // const word = line.toLowerCase();
    // // 문자를 알파벳으로 쪼개고 중복을 없애줌
    // let alphabets = [...new Set(word.split(''))];

    // // 제일많은 문자와 개수 초기화
    // let maxChar = '';
    // let maxCount = 0;

    // for (let i = 0; i < alphabets.length; i++) {
    //     // 알파벳 개수 : 문자를 알파벳으로 나눴을 때 생성되는 배열의 길이 - 1
    //     let count = word.split(alphabets[i]).length - 1;

    //     // 최대 개수보다 높으면 제일 많은 문자와 개수를 해당 알파벳과 개수로 바꿔줌
    //     if (count > maxCount) {
    //         maxChar = alphabets[i];
    //         maxCount = count;
    //         // 최대 개수와 같으면 제일 많은 문자를 ? 로 바꿔줌
    //     } else if (count === maxCount) {
    //         maxChar = '?';
    //     }
    // }

    // // 제일 많은 문자를 대문자로 출력
    // console.log(maxChar.toUpperCase());

    rl.close();
}).on('close', function () {
    process.exit();
});
