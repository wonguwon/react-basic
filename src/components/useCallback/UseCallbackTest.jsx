import React, { useCallback, useState, useMemo } from 'react';
import ViewItem from './ViewItem';

/*
  ✅ useCallback 사용 예제
  - getItems 함수가 매 렌더링마다 새로 생성되면 ViewItem이 리렌더됨
  - useCallback을 사용해 함수 메모이제이션 → 자식 컴포넌트 최적화

    숫자를 입력하면 getItems() 재생성되므로 ViewItem만 리렌더
    테마 변경 시 → getItems는 재생성되지 않으므로 ViewItem은 리렌더 되지 않음
    useCallback을 제거하고 테스트하면 매번 리렌더됨
*/

const UseCallbackTest = () => {
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(false);

  // ✅ useCallback으로 함수 메모이제이션
  const getItems = useCallback(() => {
    return num ? [num, num + 1, num + 2] : [0, 0, 0];
  }, [num]);

  // (선택) useMemo로 theme 객체도 메모이제이션해서 불필요한 리렌더링 방지
  const theme = useMemo(() => ({
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "1rem"
  }), [dark]);

  const onChangeNum = (ev) => {
    setNum(parseInt(ev.target.value));
  };

  return (
    <div style={theme}>
      <h2>useCallback 테스트</h2>
      <input
        type="number"
        value={num}
        onChange={onChangeNum}
      />
      <button onClick={() => setDark(prev => !prev)}>
        테마 변경
      </button>

      <ViewItem getItems={getItems} />
    </div>
  );
};

export default UseCallbackTest;
