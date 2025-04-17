// 📘 ES6 주요 문법 정리 (2) - 템플릿 리터럴, 구조 분해, 스프레드

// ✅ 3. 템플릿 리터럴 (Template Literals)
// - 문자열과 변수 결합 시 유용
// - 여러 줄 문자열도 편리하게 처리 가능

const userName = "jiwon";
console.log(`안녕하세요, ${userName}님!`); // 출력: 안녕하세요, jiwon님!

const multiLine = `이것은
여러 줄로
작성된 문자열입니다.`;

console.log(multiLine);

// ❌ 기존 방식과 비교
const oldWay = "안녕하세요, " + userName + "님!";
console.log(oldWay); // 출력: 안녕하세요, jiwon님!

// ------------------------------------------------------------

// ✅ 4. 객체 구조 분해 할당 (Destructuring Assignment)
// - 객체에서 필요한 값을 바로 변수로 추출

const user = {
  name: "jiwon",
  age: 30,
  job: "developer"
};

const { name, age } = user;
console.log(name); // 출력: jiwon
console.log(age);  // 출력: 30

// 변수 이름 변경도 가능
const { job: occupation } = user;
console.log(occupation); // 출력: developer

// React 예시와 연결: props 받을 때 자주 사용
// const MyComponent = ({ title, content }) => { ... }

// ------------------------------------------------------------

// ✅ 5. 배열 구조 분해 (Array Destructuring)
// - 배열 요소를 순서대로 변수에 담기
// - React의 useState 구조와 유사

const numbers = [10, 20, 30];
const [first, second] = numbers;

console.log(first);  // 출력: 10
console.log(second); // 출력: 20

// 필요 없는 값은 생략 가능
const [, , third] = numbers;
console.log(third); // 출력: 30

// React 예시
// const [count, setCount] = useState(0);

// ------------------------------------------------------------

// ✅ 6. 스프레드 연산자 (...) Spread Operator
// - 배열/객체 복사, 병합, 나머지 값 처리
// - 불변성 유지에 필수

// 배열 복사 및 확장
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "orange"];

console.log(moreFruits); // 출력: ["apple", "banana", "orange"]

// 객체 복사 및 속성 추가
const person = { name: "jiwon", age: 30 };
const newPerson = { ...person, job: "developer" };

console.log(newPerson);
// 출력: { name: "jiwon", age: 30, job: "developer" }

// 함수 매개변수에서도 사용 가능 (Rest 파라미터 예시)
function sum(...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3, 4)); // 출력: 10

// 불변성 유지 예시 (React 상태 변경 시)
const state = { count: 1 };
const updatedState = { ...state, count: 2 };

console.log(state);        // 원본 유지: { count: 1 }
console.log(updatedState); // 새 객체: { count: 2 }
