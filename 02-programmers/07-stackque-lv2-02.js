function solution(progresses, speeds) {
    let answer = [0];

    // needDay = 개발에 필요한 날짜의 배열
    let needDay = progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index]),
    );
    // 개발에 필요한 최대 날짜를 needDay[0]으로 초기화
    let maxDay = needDay[0];

    for (let i = 0, j = 0; i < needDay.length; i++) {
        // 개발에 필요한 날짜가 최대 날짜보다 낮으면
        // 이미 개발 된 것이기 때문에
        if (needDay[i] <= maxDay) {
            // 정답배열에 1을 더해준다.
            answer[j] += 1;
        } else {
            // 최대날짜를 필요한 날짜로 초기화 하고
            maxDay = needDay[i];
            // 정답 배열 다음 칸에 1을 넣어준다.
            answer[++j] = 1;
        }
    }

    return answer;

    // =============================== 풀이 1 ==================================

    // // 진행중인 작업이 0이 아닐 동안
    // while (progresses.length) {
    //     // 첫번 째 개발이 끝나기 까지 필요한 날짜
    //     const needDay = Math.ceil((100 - progresses[0]) / speeds[0]);
    //     // 필요한 날짜 * 개발 속도 만큼 일을 진행시킴
    //     const proceed = progresses.map(
    //         (progress, index) => progress + needDay * speeds[index],
    //     );

    //     // 개발 완료 된 작업 수 초기화
    //     let finished = 0;
    //     for (let i = 0; i < proceed.length; i++) {
    //         // 만약 진행률이 100% 이상이면 진행중인 작업과 속도를 없애줌
    //         if (proceed[i] >= 100) {
    //             progresses.shift();
    //             speeds.shift();
    //             finished++;
    //         } else {
    //             // 100% 미만인 작업이 있으면 멈춤
    //             break;
    //         }
    //     }
    //     answer.push(finished);
    // }

    // return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
