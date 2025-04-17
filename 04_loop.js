// 📘 CHXX. JavaScript 반복문 & 반복 메서드 정리

// ✅ 1. 기본 for문
// - 가장 일반적인 반복 방식
for (let i = 0; i < 5; i++) {
    console.log("for문 i:", i); // 0부터 4까지 출력
}

// ✅ 2. while문
// - 조건이 참일 동안 반복
let j = 0;
while (j < 3) {
    console.log("while문 j:", j);
    j++;
}

// ✅ 3. do...while문
// - 조건과 상관없이 한 번은 무조건 실행
let k = 0;
do {
    console.log("do...while문 k:", k);
    k++;
} while (k < 2);

// ✅ 4. for...of 문
// - 배열, 문자열 등 iterable 순회
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log("for...of:", fruit);
}

// ✅ 5. for...in 문
// - 객체의 key를 순회
const person = { name: "jiwon", age: 30 };
for (const key in person) {
    console.log(`for...in: ${key} → ${person[key]}`);
}

// ------------------------------------------------------------
// ✅ 6. forEach()
// - 배열 순회 전용 메서드
const numbers = [1, 2, 3];
numbers.forEach((num, idx) => {
    console.log(`forEach idx ${idx}:`, num);
});

// ✅ 7. map()
// - 배열을 "변형"할 때 사용 → 새로운 배열 반환
const squared = numbers.map((num) => num * num);
console.log("map 결과:", squared); // [1, 4, 9]

// ✅ 8. filter()
// - 조건에 맞는 요소만 추출 → 새로운 배열 반환
const evens = numbers.filter((num) => num % 2 === 0);
console.log("filter 결과:", evens); // [2]

// ✅ 9. find()
// - 조건에 맞는 "첫 번째 값"만 반환
const firstEven = numbers.find((num) => num % 2 === 0);
console.log("find 결과:", firstEven); // 2

// ✅ 10. some()
// - 하나라도 조건을 만족하면 true
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("some 결과:", hasEven); // true

// ✅ 11. every()
// - 모든 요소가 조건을 만족해야 true
const allPositive = numbers.every((num) => num > 0);
console.log("every 결과:", allPositive); // true

// ✅ 12. reduce()
// - 배열의 값을 누적하여 하나의 결과값 도출
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log("reduce 합계:", sum); // 6

// ✅ 13. reduce()로 객체로 누적도 가능
const scoreList = [
    { name: "A", score: 80 },
    { name: "B", score: 90 },
    { name: "C", score: 100 },
];

const scoreMap = scoreList.reduce((acc, cur) => {
    acc[cur.name] = cur.score;
    return acc;
}, {});

console.log("reduce 객체 변환:", scoreMap); // { A: 80, B: 90, C: 100 }
