import React, { useEffect, useState } from "react";

/*
📌 useEffect 정리
- 컴포넌트 렌더링 이후 특정 작업(=side effect)을 수행
- 클래스형 컴포넌트의 생명주기 메서드 대체 (DidMount, DidUpdate, WillUnmount)
- [사용법] useEffect(effectFn, [deps])
*/

const UseEffectTest = () => {
  const [name, setName] = useState("김개똥");
  const [num, setNum] = useState(0);

  const handleChangeName = (ev) => {
    setName(ev.target.value);
  };

  const handleClickNum = () => {
    setNum((prev) => prev + 1);
  };

  // 1️⃣ 의존성 배열이 없을 때: 모든 렌더링마다 실행됨
  useEffect(() => {
    console.log("✅ [1] 의존성 없음: 모든 렌더링마다 실행됨");
  });

  // 2️⃣ 빈 배열을 의존성으로: 최초 마운트 시 1회만 실행됨
  useEffect(() => {
    console.log("✅ [2] 빈 배열: 컴포넌트가 마운트될 때 1회 실행");
  }, []);

  // 3️⃣ name이 변경될 때만 실행
  useEffect(() => {
    console.log(`✅ [3] name 변경됨 → 현재 이름: ${name}`);
  }, [name]);

  // 4️⃣ 클린업 함수: name이 변경될 때 이전 값을 정리하거나 언마운트 시 실행됨
  useEffect(() => {
    return () => {
      console.log(`🧹 [4] name 변경 전 정리: 이전 이름은 ${name}`);
    };
  }, [name]);

  return (
    <div>
      <h2>💡 useEffect 테스트 예제</h2>
      <p>👋 안녕하세요. <strong>{name}</strong>입니다.</p>

      <input
        type="text"
        onChange={handleChangeName}
        value={name}
        placeholder="이름을 입력하세요"
      />

      <p>🖱️ 버튼을 <strong>{num}</strong>번 클릭했습니다.</p>
      <button onClick={handleClickNum}>+1 증가</button>

      <p style={{ fontSize: "0.85em", marginTop: "1.5rem", color: "#888" }}>
        ※ 콘솔에서 <code>useEffect</code> 동작 로그를 확인해보세요.
      </p>
    </div>
  );
};

export default UseEffectTest;
