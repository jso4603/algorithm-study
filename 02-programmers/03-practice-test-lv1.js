let answers = [1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2];

function solution(answers) {
    // let answer = [];

    // const man1 = [1, 2, 3, 4, 5];
    // const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    // const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // let score = [0, 0, 0];

    // for (let i = 0; i < answers.length; i++) {
    //     if (answers[i] === man1[i % man1.length]) score[0]++;
    //     if (answers[i] === man2[i % man2.length]) score[1]++;
    //     if (answers[i] === man3[i % man3.length]) score[2]++;
    // }

    // const max = Math.max(...score);

    // for (let i = 0; i < score.length; i++) {
    //     if (max === score[i]) answer.push(i + 1);
    // }

    // ========================== 풀이 2 ========================================

    // let answer = [];
    // // supo : 수포자 찍는 방식
    // let supo = [
    //     [1, 2, 3, 4, 5],
    //     [2, 1, 2, 3, 2, 4, 2, 5],
    //     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    // ];

    // let score = [];
    // for (let i = 0; i < supo.length; i++) {
    //     // ex) answers = [1,3,2,4,2,1,3,2,4,2 ...] / supo[i] = [1,2,3,4,5,1,2,3,4,5 ...]
    //     // 각 인덱스의 값 비교해서 일치하는 값(정답)만을 가진 배열을 반환
    //     // 정답 수 : filter 된 배열의 길이
    //     score[i] = answers.filter(
    //         (element, index) => element === supo[i][index % supo[i].length],
    //     ).length;
    // }

    // let max = Math.max(...score);

    // if (score[0] === max) answer.push(1);
    // if (score[1] === max) answer.push(2);
    // if (score[2] === max) answer.push(3);

    // ========================== 풀이 1 ========================================

    // let answer = [];
    // // supo : 수포자 찍는 방식
    // let supo = [
    //     [1, 2, 3, 4, 5],
    //     [2, 1, 2, 3, 2, 4, 2, 5],
    //     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    // ];

    // // 수포자들의 점수를 넣을 배열
    // let score = [];
    // // 수포자 수 만큼 for문
    // for (let i = 0; i < supo.length; i++) {
    //     // 정답 수 초기화
    //     let result = 0;

    //     // 시험문제 수 만큼 for문
    //     for (let j = 0; j < answers.length; j++) {
    //         // ex) [1,2,3,4,5] = 0~4번 인덱스의 값이 반복으로 들어가니
    //         // 5로 나눈 나머지 인덱스의 값을 계속 넣어주면 된다.
    //         supoAnswers = supo[i][j % supo[i].length];

    //         // 맞은 숫자를 구한다
    //         if (answers[j] === supoAnswers) {
    //             result++;
    //         }
    //     }
    //     // 맞은 숫자를 점수배열에 넣어준다.
    //     score.push(result);
    // }

    // // 맞은 점수가 최고점과 같을 경우 해당 인덱스를 answer 배열에 넣는다.
    // for (let i = 0; i < score.length; i++) {
    //     if (score[i] === Math.max(...score)) {
    //         answer.push(i + 1);
    //     }
    // }

    return answer;
}

console.log(solution(answers));
