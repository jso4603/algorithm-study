function solution(n, lost, reserve) {
    // 체육복을 잃어버렸으면서 여벌이 없는 경우
    const realLost = lost.filter((element) => !reserve.includes(element));

    // 여벌이 있으면서 체육복을 잃어버리지 않은 경우
    let realReserve = reserve.filter((element) => !lost.includes(element));

    // 학생 수(n) - 잃어버린 학생이 여벌을 못받은 경우(realLost.filter)
    return (
        // realLost.filter((lost) : 잃어버린 사람 중 여벌을 받을 수 없는 학생을 배열로 반환
        n -
        realLost.filter((lost) => {
            // lend : 체육복을 빌려줄 수 있는 경우 중 첫 번째 요소
            const lend = realReserve.find(
                // 잃어버린 사람의 1칸 주위에 빌릴 사람이 있는 경우
                (reverse) => Math.abs(reverse - lost) == 1,
            );

            // 빌려줄 수 있는 사람이 없으면 진짜 잃어버린 걸로 간주하고 lost를 return
            if (!lend) return lost;
            // 빌려 줬으면 reserve 배열에서 빌려준 사람 제외
            realReserve = realReserve.filter((reverse) => reverse !== lend);
        }).length
    );

    // ========================== 풀이 2 ========================================

    // // reserve의 얇은 복사본
    // // slice()를 쓰면 reserve가 변할 때 tmp가 변하지 않지만
    // // splice()를 쓰면 reserver가 변할 때 tmp가 변한다.
    // let tmp = reserve.slice();

    // for (let i in tmp) {
    //     // 잃어 버린 학생이 여분이 있는 학생인지 확인
    //     let key = lost.indexOf(tmp[i]);

    //     // 여분이 없으면 여분이 있는 학생이 잃어버린 학생에게 빌려준다
    //     if (key != -1) {
    //         lost.splice(key, 1);
    //         reserve.splice(reserve.indexOf(tmp[i]), 1);
    //     }
    // }

    // for (let i of reserve) {
    //     // 잃어버린 사람 한 칸 주위에 여분이 있는 사람이 있는지
    //     let key = lost.includes(i - 1)
    //         ? lost.indexOf(i - 1)
    //         : lost.indexOf(i + 1);

    //     // 있으면 잃어버린 사람 배열에서 삭제
    //     if (key != -1) {
    //         lost.splice(key, 1);
    //     }
    // }

    // return n - lost.length;

    // ========================== 풀이 1 ========================================

    // var answer = 0;

    // // 학생 수 만큼 배열의 가지고 있는 유니폼 수를 1로 초기화
    // let hasUniform = new Array(n).fill(1);

    // // 잃어버린 학생은 -1 을 해줌
    // for (let i = 0; i < lost.length; i++) {
    //     hasUniform[lost[i] - 1]--;
    // }

    // // 여벌이 있으면 +1 을 해줌
    // for (let i = 0; i < reserve.length; i++) {
    //     hasUniform[reserve[i] - 1]++;
    // }

    // for (let i = 0; i < hasUniform.length; i++) {
    //     // 유니폼이 없을 때 좌우 학생이 유니폼이 있을경우 빌려줌
    //     if (hasUniform[i] === 0) {
    //         if (hasUniform[i - 1] === 2) {
    //             hasUniform[i]++;
    //             hasUniform[i - 1]--;
    //         } else if (hasUniform[i + 1] === 2) {
    //             hasUniform[i]++;
    //             hasUniform[i + 1]--;
    //         }
    //     }

    //     // 유니폼이 1개이상 있으면 통과
    //     if (hasUniform[i] >= 1) {
    //         answer++;
    //     }
    // }

    // return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
