// ✅ 변수와 상수의 차이: let vs const

// 변수명 규칙 (기본 문법)
// 1. 변수명에는 $, _ 외의 특수문자 ❌
// 2. 숫자로 시작 ❌
// 3. 예약어 사용 ❌

// 올바른 변수명 예시
let user_name = "ttining";
let $price = 3000;
let _status = true;

// ❌ 잘못된 변수명 예시
// let 1user = "abc";       // 숫자로 시작 ❌
// let let = "reserved";     // 예약어 사용 ❌
// let user-name = "abc";    // 하이픈 ❌

// -----------------------------
// ✅ let: 변수 (값 재할당 가능)
let name = "ttining";
console.log("초기 name:", name); // "ttining"

name = "jiin"; // 재할당 OK
console.log("변경된 name:", name); // "jiin"

// -----------------------------
// ✅ const: 상수 (값 재할당 불가능)
const nickName = "ttining";
console.log("const nickName:", nickName);

// ❌ 재할당 시도 → 오류 발생 예시
try {
  nickName = "jiin"; // TypeError
} catch (error) {
  console.log("오류 발생:", error.message);
}

// -----------------------------
// ❓ 왜 const를 사용할까?
// - 실수로 값을 바꾸는 것을 막기 위해
// - 변하지 않아야 하는 값을 명확하게 표시하기 위해