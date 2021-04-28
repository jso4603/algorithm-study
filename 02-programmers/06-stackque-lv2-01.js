function solution(bridge_length, weight, truck_weights) {
    // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 트럭이 빠져 나갈 시간].
    let time = 0,
        qu = [[0, 0]],
        weightOnBridge = 0;
    // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
    while (qu.length > 0 || truck_weights.length > 0) {
        // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
        //    다리 위 트럭 무게 합에서 빼준다.
        if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];
        if (weightOnBridge + truck_weights[0] <= weight) {
            // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
            //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
            weightOnBridge += truck_weights[0];
            qu.push([truck_weights.shift(), time + bridge_length]);
        } else {
            // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
            //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
            //    참고: if 밖에서 1 더하기 때문에 -1 해줌
            if (qu[0]) time = qu[0][1] - 1;
        }
        // 시간 업데이트 해준다.
        time++;
    }
    return time;

    // =============================== 풀이 1 ==================================
    // // 다리배열을 다리 길이보다 하나 작게 0으로 채워서 만들고
    // // 마지막 요소에 첫 트럭을 넣는다
    // let bridge = new Array(bridge_length - 1).fill(0);
    // bridge.push(truck_weights.shift());
    // // 트럭 하나가 이미 지났다고 가정해서 1초 지난 걸로 초기화
    // let time = 1;
    // // 다리에 트럭이 없을때 까지 무한루프
    // while (bridge.reduce((a, b) => a + b) > 0) {
    //     // 다리 제일 앞에 있는 요소를 보내고
    //     // 버틸 수 있는 다리 무게가 다음 트럭보다 높은지 비교한다.
    //     // 버틸 수 있으면 다리 마지막 요소에 트럭을 넣고 시간을 경과 시키고
    //     // 버틸 수 없으면 0을 넣고 시간을 경과 시킨다.
    //     bridge.shift();
    //     if (weight - bridge.reduce((a, b) => a + b) >= truck_weights[0]) {
    //         bridge.push(truck_weights.shift());
    //     } else {
    //         bridge.push(0);
    //     }
    //     time++;
    // }
    // return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
