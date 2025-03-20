import React from 'react';
import './style.css'; // 외부 CSS 파일을 import
import styled from 'styled-components'; // styled-components 라이브러리 import

// CSS-in-JS 예시
const roundBoxStyle = {
  position: "absolute",
  top: 50,
  left: 50,
  width: "50%",
  height: "200px",
  padding: 20,
  background: "rgba(162,216,235,0.6)",
  borderRadius: 50, // 3. 속성은 camelCase 사용
};

const HighlightDiv = styled.div`
  background-color: #ffeb3b;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
`;

const RoundBox = styled.div`
  position: absolute;
  top: ${props => props.top || 50}px;
  left: 50px;
  width: 50%;
  height: 200px;
  padding: 20px;
  background: rgba(162,216,235,0.6);
  border-radius: 50px;
`;

function Style() {
  return (
    <>
      {/* 1. Object로 CSS 작성 */}
      <div
        style={{
          position: "relative",
          width: 400,
          height: 1500,
          background: "#f1f1f1",
        }}
      >
        {/* 2. CSS-in-JS 사용: 객체 스타일을 직접 작성 */}
        <div style={roundBoxStyle}>Hello1</div>

        {/* 3. 스타일 객체 재활용 */}
        <div style={{ ...roundBoxStyle, top: 350 }}>
          {/* 4. className을 사용한 스타일링 */}
          <div className='highlight'>Hello2</div>
        </div>

        {/* 5. 조건적 스타일링 */}
        <div style={{ ...roundBoxStyle, top: 650 }}>
          {/* 5-1. 삼항 연산자를 사용한 className 조건부 렌더링 */}
          <div className={1 + 1 === 2 ? "highlight" : ""}>Hello3</div>

          {/* 5-2. && 연산자를 사용한 조건부 스타일링 */}
          {/* <div className={1 + 1 === 2 && "highlight"}>Hello3</div> */}
        </div>

        {/* 4. styled-components로 작성한 컴포넌트 사용 */}
        <RoundBox top={950}>
            <HighlightDiv>styled-components를 활용한 스타일링</HighlightDiv>
        </RoundBox>
      </div>
    </>
  );
}

export default Style;
