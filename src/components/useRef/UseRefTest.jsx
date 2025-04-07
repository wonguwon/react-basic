import React, { useRef, useState, useEffect } from 'react';

/*
    useRef는 React에서 DOM요소에 직접 접근하거나 컴포넌트 렌더링 간 상태 변화 없이 값을 
    저장하는데 사용된다. state와 다르게 값이 변경되어도 컴포넌트가 리렌더링되지 않고
    초기화되지 않고 참조값을 유지한다. 주로 DOM요소 포커스나 스크롤 위치를 추천하거나
    또는 이전값을 기억하는데 유용하다.
*/

const UseRefTest = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("man");

  const useInput = useRef(null);  // useRef로 input 요소를 참조

  const handleChangeName = (ev) => {
    setName(ev.target.value);
  }

  const handleChangeGender = (ev) => {
    setGender(ev.target.value);
  }

  const handleSubmit = (ev) => {
    alert(`이름 : ${name}, 성별 : ${gender}`);
    ev.preventDefault();
  }

  const handleReset = () => {
    setName("");
    setGender("man");
  }

  useEffect(() => {
    useInput.current?.focus(); // 초기화 버튼 클릭 시 input에 포커스 설정
  }, [name, gender]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 : 
        <input 
          type="text" 
          value={name} 
          onChange={handleChangeName} 
          ref={useInput}  // useRef로 포커스를 설정할 input 요소에 참조를 연결
        />
      </label>
      <br /><br />
      <label>
        성별 : 
        <select value={gender} onChange={handleChangeGender}>
          <option value="man">남자</option>
          <option value="woman">여자</option>
        </select>
      </label>
      <br /><br />
      <button type='submit'>제출</button>
      <button type='button' onClick={handleReset}>초기화</button>
    </form>
  );
}

export default UseRefTest;
