import React from 'react';

// 기본 데이터 선언
const text = "Hello, world!";
const num = 15;
const obj = { name: "최지원", age: 20, gender: "M" };
const arr = [1, 2, 3];
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(<h4 key={i}>{arr[i]}</h4>);
}
const imageUrl = "https://dst6jalxvbuf5.cloudfront.net/static/img/logo/logo.svg";

// 간단한 함수 예시
function getGreeting() {
  return "안녕하세요, React!";
}

function JavaScript() {
  return (
    <div>
      <h2>변수 넣기</h2>
      <ul>
        <li>{text}</li> {/* 변수 그대로 출력 */}
        <li>{text + " test"}</li> {/* 문자열 결합 */}
      </ul>
      <h2>숫자 및 계산식 넣기</h2>
      <ul>
        <li>{num}</li> {/* 숫자 그대로 출력 */}
        <li>{num + 15}</li> {/* 숫자 계산식 (num + 15) */}
      </ul>

      <h2>Boolean, Nullish 값 넣기</h2>
      <ul>
        <li>{true}</li> {/* true 출력 */}
        <li>{false}</li> {/* false 출력 */}
        <li>{undefined}</li> {/* undefined 출력 */}
        <li>{null}</li> {/* null 출력 */}
      </ul>
      <h2>Object, Array 넣기</h2>
      <ul>
        {Object.keys(obj).map((key) => (
          <li key={key}>
            {key}: {obj[key]}
          </li>
        ))}
        <li>{arr}</li> {/* 배열 그대로 출력 (자동으로 문자열로 변환됨) */}
        <li>
          {[<div key="1">111</div>, <div key="2">222</div>, <div key="3">333</div>]}
        </li>
      </ul>
      <h2>주석 넣기</h2>
      <ul>
        <li>{/* 이 곳은 JSX 주석입니다. */}</li> {/* JSX 내부에서 주석 사용 */}
      </ul>
      <h2>태그 속성에 값 넣기</h2>
      <ul>
        <li>
          <img src={imageUrl} alt="logo" /> {/* 이미지 태그에 변수를 넣어서 동적으로 값 설정 */}
        </li>
      </ul>
      <h2>조건부 렌더링</h2>
      <ul>
        <li>{num > 10 ? "10보다 큼" : "10보다 작음"}</li> {/* 삼항 연산자를 사용한 조건부 출력 */}
      </ul>
      <h2>함수 호출</h2>
      <ul>
        <li>{getGreeting()}</li> {/* 함수 호출하여 결과값 출력 */}
      </ul>
      <h2>배열을 이용한 동적 리스트</h2>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li> // 배열을 map으로 돌며 동적으로 목록 생성
        ))}
      </ul>
      <h2>배열로 넣기</h2>
      <ul>
        <li>{arr}</li> {/* 배열 그대로 출력 */}
        <li>{arr2}</li> {/* for문으로 처리한 배열 출력 */}
      </ul>
      <h2>Array.map</h2>
      <ul>
        {arr.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li> // map으로 동적 리스트 생성
        ))}
      </ul>
      <h2>조건문과 연산자 사용</h2>
      <ul>
        <h3>삼항 연산자</h3>
        <li>{1 + 1 === 2 ? "참입니다." : "거짓입니다."}</li> {/* 삼항 연산자 */}
        
        <h3>AND 연산자</h3>
        <li>{1 + 1 === 2 && "AND 연산자1"}</li> {/* AND 연산자 */}
        <li>{1 + 1 !== 2 && "AND 연산자2"}</li>
        <li>{arr.length && "AND 연산자3"}</li> {/* 배열의 길이가 0이 아니면 출력 */}

        <h3>OR 연산자</h3>
        <li>{1 + 1 !== 2 || "OR 연산자1"}</li> {/* OR 연산자 */}
        <li>{text || "OR 연산자2"}</li> {/* text가 falsy이면 "OR 연산자2" 출력 */}
      </ul>
      <h2>IF문 (즉시실행함수)</h2>
      <ul>
        <li>{(() => { if (1 + 1 === 2) return "IF"; else return "ELSE"; })()}</li>
        {/* 즉시 실행 함수로 IF문 사용 */}
      </ul>

    </div>
  );
}

export default JavaScript;
