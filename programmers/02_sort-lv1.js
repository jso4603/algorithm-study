let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];

// function solution(array, commands) {
//     return commands.map((command) => {
//         // commands의 요소들을 명시적으로 구조 분해 할당
//         const [sPoint, ePoint, point] = command;
//         // array에서 인덱스 가 스타팅포인트 - 1(2번째부터 시작하려면 1번인덱스이기 때문) 이상
//         // 엔드포인트 - 1(5번째면 4번 인덱스) 이하 까지 추출해서 newArray에 넣어준다.
//         // sort를 이용하여 오름차순으로 정렬
//         const newArray = array
//             .filter(
//                 (value, fIndex) => fIndex >= sPoint - 1 && fIndex <= ePoint - 1,
//             )
//             .sort((a, b) => a - b);

//         // 포인트 - 1 번째(3번째면 2번 인덱스) 요소를 answer에 return
//         return newArray[point - 1];
//     });
// }

// ========================== 풀이 2 ==========================

// function solution(array, commands) {
//     return commands.map(
//         ([from, to, k]) =>
//             array.slice(from - 1, to).sort((a, b) => a - b)[k - 1],
//     );
// }

// ========================== 내 풀이 ==========================

// function solution(array, commands) {
//     var answer = [];

//     for (let i = 0; i < commands.length; i++) {
//         answer.push(
//             array
//                 .slice(commands[i][0] - 1, commands[i][1])
//                 .sort((a, b) => a - b)[commands[i][2] - 1],
//         );
//     }

//     return answer;
// }

console.log(solution(array, commands));
