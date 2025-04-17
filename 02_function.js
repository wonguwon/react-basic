// 📘 CHXX. 기본 매개변수 (Default Parameters)

// ✅ 1. 기본 사용법
function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }
  
  greet();           // 출력: Hello, Guest
  greet("소영");     // 출력: Hello, 소영
  
  // ✅ 2. 여러 개의 매개변수에 기본값 설정
  function introduce(name = "익명", age = 0) {
    console.log(`${name}님은 ${age}살입니다.`);
  }
  
  introduce();                    // 출력: 익명님은 0살입니다.
  introduce("지민", 25);          // 출력: 지민님은 25살입니다.
  introduce("유하");             // 출력: 유하님은 0살입니다.
  
  // ✅ 3. 인자에 undefined를 명시해도 기본값이 적용됨
  greet(undefined);              // 출력: Hello, Guest
  
  // ✅ 4. 기본값이 있는 매개변수는 보통 뒤쪽에 위치
  function showInfo(name, hobby = "독서") {
    console.log(`${name}님의 취미는 ${hobby}입니다.`);
  }
  
  showInfo("태봉");              // 출력: 태봉님의 취미는 독서입니다.
  showInfo("진영", "등산");     // 출력: 진영님의 취미는 등산입니다.
  
  // ❌ 기본값이 앞에 오면 예측하기 어려움
  function wrongOrder(count = 1, value) {
    console.log("count:", count, "value:", value);
  }
  
  wrongOrder(5); // 예상: count=5, value=undefined → 실제: count=5, value=undefined (헷갈림)
  
  // ✅ 5. 기본값에 다른 매개변수 사용 가능
  function calculatePrice(price, tax = price * 0.1) {
    return price + tax;
  }
  
  console.log(calculatePrice(100));     // 110
  console.log(calculatePrice(100, 5));  // 105
  
  // ✅ 6. 화살표 함수에도 사용 가능
  const sayHi = (name = "친구") => {
    console.log(`안녕, ${name}~`);
  };
  
  sayHi();              // 출력: 안녕, 친구~
  sayHi("인태");        // 출력: 안녕, 인태~
  