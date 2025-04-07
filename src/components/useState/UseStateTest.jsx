import React, { useState } from 'react'

/*
    state : 컴포넌트의 상태값
    useState : 컴포넌트의 상태를 생성하고 관리할 수 있게 해주는 react hook

    -> 컴포넌트는 state값이 변경되면 이를 확인하고 요소를 리랜더링 해준다.

    [사용법]
    const [변수명, setState변수명] = useState(초기값);
    변수명 : 원하는 state명을 설정
    set변수명 : 해당 state값을 변경할 함수
*/

const UseStateTest = () => {
    // let num = 0;
    const [num, setNum] = useState(0);

    const onClick1 = () => {
        // num += 1; (현재 상태를 직접 사용하는 방식)
        //실시간으로 처리되는 것이아니라 모아두었다가 한번에 처리되는 방식이다.
        setNum(num + 1);
        setNum(num + 1);
        console.log("num : " + num);
    }

    const onClick2 = () => {
        // num -= 1; (이전 상태를 사용하는 방식)
        setNum(prevNum => prevNum - 1);
        setNum(prevNum => {
            console.log("이전 상태 출력:", prevNum);
            return prevNum - 1;
        });
        console.log("상태 업데이트 요청");
        // 상태가 이전 상태에 의존하는 경우에는 
        // 항상 상태 업데이트 함수에 콜백을 사용하는 방식(prevNum => prevNum - 1)을 사용하는 것이 안전합니다.
    }

    return (
        <div>
            <span>COUNT : {num} </span>
            <button onClick={onClick1}> + </button>
            <button onClick={onClick2}> - </button>
        </div>
    )
}

export default UseStateTest
/*
상태 업데이트가 비동기적이라는 것의 의미
 React에서 setState나 setNum 같은 상태 업데이트 함수는 비동기적으로 작동합니다. 
 즉, 상태를 바로바로 반영하지 않고, 여러 상태 업데이트를 배치해서 한 번에 처리하려고 합니다. 
 이 점에서 **setNum(num - 1)**과 setNum(prevNum => prevNum - 1) 사이의 차이가 발생합니다.

 setNum(prevNum => prevNum - 1)에서는 클로저가 해당 데이터를 저장해서 사용할 수 있게 해준다.
*/