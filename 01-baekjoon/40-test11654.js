const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    // charAt(index) : 해당 index의 유니코드 단일문자 반환
    // console.log(line.charAt());

    // charCodeAt(index) : 해당 index의 문자의 아스키코드 반환
    console.log(line.charCodeAt());

    rl.close();
}).on('close', function () {
    process.exit();
});
