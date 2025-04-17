// 📁 utils.js
// 이 파일은 "모듈" 역할을 하며, 기능들을 외부에서 사용할 수 있도록 내보냅니다.

// ✅ Named export: 이름을 지정하여 내보냄
export function add(a, b) {
    return a + b;
  }
  
  // ✅ 변수도 export 가능
  export const pi = 3.14159;
  
  // ✅ Default export: 이름 없이 1개만 내보낼 수 있음
  // → 가져오는 쪽에서는 import 시 이름을 자유롭게 정할 수 있음
  export default function sayHi(name = "Guest") {
    console.log(`안녕하세요, ${name}님!`);
  }
  
  // 💡 이 파일 자체는 실행되지 않으며,
  // 다른 파일에서 import 되어야 기능이 동작합니다.
  