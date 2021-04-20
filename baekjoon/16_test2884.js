const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const input = line.split(' ');

    // ==============================================================

    // let hour = Number(input[0]);
    // let minute = Number(input[1]);

    // minute -= 45;

    // if (minute < 0) {
    //     minute += 60;
    //     hour--;

    //     if (hour === -1) {
    //         hour = 23;
    //     }
    // }

    // console.log(hour, minute);

    // ==============================================================

    // ==============================================================

    // let hour = Number(input[0]);
    // let minute = Number(input[1]);

    // let date = new Date(2021, 4, 20, hour, minute);

    // date.setMinutes(date.getMinutes() - 45);

    // console.log(date.getHours(), date.getMinutes());

    // ==============================================================

    // ==============================================================

    let hour = Number(input[0]);
    let minute = Number(input[1]);

    const date1 = new Date('December 17, 1995 03:24:01');
    // 1995-12-16T18:24:00.000Z

    const date2 = new Date('1995-12-17T03:24:00');
    // 1995-12-16T18:24:00.000Z

    console.log(date1);
    console.log(date2);

    console.log(date1 === date2);
    // expected output: false;

    console.log(date1 + date2);
    // expected output: 0

    const date3 = Date('');
    // Tue Apr 20 2021 17:24:07 GMT+0900 (GMT+09:00)

    const date4 = Date('');
    // Tue Apr 20 2021 17:24:07 GMT+0900 (GMT+09:00)

    console.log(date3);
    console.log(date4);

    console.log(date3 === date4);
    // expected output: true;

    console.log(date3 - date4);
    // expected output: NaN;

    const date5 = +new Date('December 17, 1995 03:24:00');
    // 819138240000

    const date6 = +new Date('1995-12-17T03:24:00');
    // 819138240000

    console.log(date5 === date6);
    // expected output: true;

    console.log(date5 - date6);
    // expected output: 0

    // ==============================================================

    rl.close();
}).on('close', function () {
    process.exit();
});
