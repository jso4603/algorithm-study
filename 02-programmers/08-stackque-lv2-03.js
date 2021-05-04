function solution(priorities, location) {
    // 대기열 문서를 내 문서인지 확인하는 boolean isMe와 value를 가진 객체로 변환
    // map,some 때문에 속도가 느려지기 때문에 풀이 1이 더 나은거 같음.
    let list = priorities.map((element, index) => ({
        isMe: index === location,
        val: element,
    }));

    let ranking = 0;

    while (true) {
        // 첫 문서를 빼서 자신보다 중요도가 높은 문서가 하나라도 있으면
        // 대기열 제일 뒤로 보낸다
        let firstPage = list.shift();
        if (list.some((element) => element.val > firstPage.val)) {
            list.push(firstPage);
        } else {
            // 없으면 순위를 갱신하고 그 문서가 자신인지 확인한다.
            // 자신이 맞으면 순위를 return
            ranking++;
            if (firstPage.isMe) return ranking;
        }
    }

    // =============================== 풀이 1 ==================================

    // // 순위 초기화
    // let ranking = 0;

    // // 대기목록이 다 비워질 때 까지
    // while (priorities.length) {
    //     // 대기목록 첫번째 요소 배열 최대값보다 작은 경우
    //     if (priorities[0] < Math.max(...priorities)) {
    //         // 첫번째 요소가 자신일 경우 location을 배열 마지막으로 옮김
    //         if (location === 0) {
    //             location = priorities.length - 1;
    //         } else {
    //             location--;
    //         }
    //         // 제일 앞 요소를 뺴서 제일 뒤에 넣는다
    //         priorities.push(priorities.shift());
    //     } else {
    //         // 순위를 업데이트 해줌
    //         ranking++;
    //         // 배열을 빠져나가는 게 자신일 경우 멈추고 순위를 return
    //         if (location === 0) {
    //             return ranking;
    //         } else {
    //             location--;
    //         }
    //         // 자신이 아니면 제일 앞의 요소 빼낸다.
    //         priorities.shift();
    //     }
    // }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
