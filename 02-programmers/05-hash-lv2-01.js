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

    // let obj = {};
    // for (let i = 0; i < clothes.length; i++) {
    //     if (obj[clothes[i][1]] === undefined) {
    //         obj[clothes[i][1]] = 1;
    //     } else {
    //         obj[clothes[i][1]]++;
    //     }
    // }

    // let clothesKind = [];

    // for (const key in obj) {
    //     if (Object.hasOwnProperty.call(obj, key)) {
    //         clothesKind.push(obj[key]);
    //     }
    // }

    // let result = 0;

    // for (let i = 0; i < clothesKind.length; i++) {
    //     if (clothesKind[i - 1] !== undefined) {
    //         result += result * clothesKind[i];
    //     }
    //     result += clothesKind[i];
    // }

    // return result;
}

console.log(solution(clothes1));
console.log(solution(clothes2));
