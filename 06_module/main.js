// 📁 main.js
// 이 파일은 메인 실행 파일이며, utils.js에서 export한 기능을 import하여 사용합니다.

// ✅ default export는 중괄호 없이 자유롭게 이름 지정 가능
import sayHi from './utils.js';

// ✅ named export는 중괄호로 감싸서 가져옴
import { add, pi } from './utils.js';

// sayHi 함수 실행 (default export)
sayHi("jiwon"); // 출력: 안녕하세요, 소영님!

// add 함수 실행
console.log("2 + 3 =", add(2, 3)); // 출력: 2 + 3 = 5

// 상수 pi 사용
console.log("원주율 =", pi); // 출력: 원주율 = 3.14159

// 💡 모듈은 각 파일이 독립된 scope를 가지므로,
// 다른 파일의 변수나 함수는 반드시 import해야 사용할 수 있습니다.
