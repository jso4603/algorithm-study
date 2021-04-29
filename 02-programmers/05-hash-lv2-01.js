const clothes1 = [
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
];
const clothes2 = [
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
];

function solution(clothes) {
    return (
        Object.values(
            clothes.reduce((obj, t) => {
                obj[t[1]] = (obj[t[1]] || 1) + 1;
                return obj;
            }, {}),
        ).reduce((a, b) => a * b, 1) - 1
    );

    // =============================== 풀이 2 ==================================

    // let obj = {};

    // for (let i = 0; i < clothes.length; i++) {
    //     obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    // }

    // let result = 1;

    // for (const key in obj) {
    //     if (Object.hasOwnProperty.call(obj, key)) {
    //         result *= obj[key];
    //     }
    // }

    // return result - 1;

    // =============================== 풀이 1 ==================================

    // // 옷의 종류와 종류별 갯수를 저장 할 객체
    // let obj = {};

    // for (let i = 0; i < clothes.length; i++) {
    //     // 옷의 종류가 정의 되지 않았으면 옷의 종류의 value = 1
    //     if (obj[clothes[i][1]] === undefined) {
    //         obj[clothes[i][1]] = 1;
    //         // 종류가 존재하면 value에 + 1
    //     } else {
    //         obj[clothes[i][1]]++;
    //     }
    // }

    // // 옷의 종류별 개수를 담을 배열을 초기화
    // let clothesKind = [];

    // // 옷의 종류별 갯수를 clotherKind 배열에 담아준다.
    // for (const key in obj) {
    //     if (Object.hasOwnProperty.call(obj, key)) {
    //         clothesKind.push(obj[key]);
    //     }
    // }

    // // 경우의 수를 담을 result 변수 초기화
    // let result = 0;

    // //
    // for (let i = 0; i < clothesKind.length; i++) {
    //     // ex) [1,2]
    //     // 첫 번째 경우의 수(1) + 두 번째 경우의 수(2) + 둘의 곱(2) = 5
    //     // ex) [1,2,3]
    //     // 이전 경우의 수(5) + 자신의 경우의 수(3) + 둘의 곱(5*3) = 23

    //     // i가 0 이상 일때
    //     if (i) {
    //         result += result * clothesKind[i];
    //     }
    //     result += clothesKind[i];
    // }

    // return result;
}

console.log(solution(clothes1));
console.log(solution(clothes2));
