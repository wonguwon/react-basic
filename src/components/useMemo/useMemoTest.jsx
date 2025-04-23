import React, { useState } from 'react';
import ViewState from './ViewState';

/*
  ✅ useMemoTest: 부모 컴포넌트
  - num: 숫자 상태
  - text: 입력 상태
  - ViewState에서 num 값을 기반으로 무거운 연산 처리
*/

const UseMemoTest = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('');

  const increaseNum = () => setNum((prev) => prev + 1);
  const decreaseNum = () => setNum((prev) => prev - 1);

  const onChangeText = (ev) => {
    setText(ev.target.value);
  };

  return (
    <div>
      <h2>useMemo 최적화 테스트</h2>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={increaseNum}>+</button>
        <button onClick={decreaseNum}>-</button>
        <input
          type="text"
          placeholder="글자를 입력하세요."
          value={text}
          onChange={onChangeText}
        />
      </div>

      <ViewState num={num} />
    </div>
  );
};

export default UseMemoTest;
