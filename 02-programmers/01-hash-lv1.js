let participant = ['mislav', 'stanko', 'mislav', 'ana']; // 참여 선수
let completion = ['stanko', 'ana', 'mislav']; // 완주한 선수

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    return participant.find((el, index) => el !== completion[index]);
}

// ================ 풀이 2(정확성 : 50 / 효율성 : 50) ================

// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();

//     for (let i = 0; i < participant.length; i++) {
//         if (participant[i] !== completion[i]) {
//             return participant[i];
//         }
//     }
// }

// ================ 풀이 1(정확성 : 50 / 효율성 : 0) ================

// function solution(participant, completion) {
//     for (let i = 0; i < completion.length; i++) {
//         if (participant.includes(completion[i])) {
//             participant.splice(participant.indexOf(completion[i]), 1);
//         }
//     }

//     return participant.join('');
// }

console.log(solution(participant, completion));
