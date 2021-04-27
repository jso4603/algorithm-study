const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    let word = line;

    // 해당 크로아티아 단어를 문자열에서 전부 찾는 정규식
    const regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
    // 해당 크로아티아 단어를 * 로 치환
    word = word.replace(regex, '*');
    console.log(word.length);

    // ============================== 2번 ==============================

    // let word = line;
    // const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

    // for (let alphabet of croatian) {
    //     // 크로아티아 단어 기준으로 split하고 그 자리를 *로 대체하고 string을 만들어 준다.
    //     word = word.split(alphabet).join('*');
    // }
    // console.log(word.length);

    // ============================== 내 풀이 ==============================

    // let word = line;
    // const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

    // for (let i = 0; i < croatian.length; i++) {
    //     // 크로아티아어가 있는지 모두 찾는 정규식
    //     let regex = new RegExp(croatian[i], 'g');
    //     // 있으면 크로아티아어를 *로 바꿔준다.
    //     word = word.replace(regex, '*');
    // }

    // console.log(word.length);

    rl.close();
}).on('close', function () {
    process.exit();
});
