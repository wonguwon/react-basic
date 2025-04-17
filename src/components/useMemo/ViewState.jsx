import React, { useMemo } from 'react';

/*
  ✅ ViewState: 자식 컴포넌트
  - num 값으로 매우 무거운 연산을 흉내냄
  - useMemo 없으면 text 입력만 바뀌어도 매번 다시 계산됨
*/

const ViewState = ({ num }) => {
  console.log("🔁 ViewState 렌더링");

  // ❌ useMemo 없으면 text만 바꿔도 이 무거운 계산 매번 실행됨
  const getHeavyResult = (count) => {
    console.log("💥 무거운 연산 시작...");
    let i = 0;
    while (i < 1000000000) i++; // 의도적 딜레이
    return count * 2;
  };

  // ✅ useMemo로 연산 결과 캐싱
  const heavyResult = useMemo(() => getHeavyResult(num), [num]);

  return (
    <div>
      <p>현재 숫자: {num}</p>
      <p>계산된 값 (x2): {heavyResult}</p>
    </div>
  );
};

export default ViewState;
