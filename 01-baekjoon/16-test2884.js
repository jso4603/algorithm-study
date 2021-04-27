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

    let hour = Number(input[0]);
    let minute = Number(input[1]);

    let date = new Date(2021, 4, 20, hour, minute);

    date.setMinutes(date.getMinutes() - 45);

    console.log(date.getHours(), date.getMinutes());

    // ==============================================================

    rl.close();
}).on('close', function () {
    process.exit();
});
