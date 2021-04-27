const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    // 알파벳 소문자로만 이루어진 단어 S
    const S = line;

    let result = '';
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        // fromCharCode() : 숫자를 아스키코드로 반환
        result += S.indexOf(String.fromCharCode(i)) + ' ';
    }

    // 마지막 여백을 잘라낸다.
    result = result.slice(0, -1);
    console.log(result);

    rl.close();
}).on('close', function () {
    process.exit();
});
