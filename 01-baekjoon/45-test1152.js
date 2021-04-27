const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    // 입력받은 문자의 양 끝의 공백을 제거한 후 공백을 기준으로 split
    let words = line.trim().split(' ');

    // // 배열 요소 중 ''를 걸러냄.
    // words = words.filter((e) => e !== '');

    // 문제에서 공백이 연속해서 나오는 경우가 없다고 했으니 filter 안 써도 됨
    if (words[0] === '') {
        console.log(0);
    } else {
        console.log(words.length);
    }

    rl.close();
}).on('close', function () {
    process.exit();
});
