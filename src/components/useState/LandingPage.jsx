import React, { useState } from 'react';
import Toolbar from './Toolbar';

/*
    여러 컴포넌트에서 사용하는 데이터를 상위 컴포넌트에 state로 저장하고
    이를 props로 하위 컴포넌트에 전달한다. 또한, state 변경 함수는
    상위 컴포넌트에서 정의하고, 하위 컴포넌트에서 직접 setState를 호출하지 않도록 한다.
*/
const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onClickLogin = () => {
    setIsLogin(true);
  };

  const onClickLogout = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <h1 style={{ padding: 24 }}>KH 정보교육원</h1>
      <Toolbar 
        isLogin={isLogin} 
        onClickLogin={onClickLogin} 
        onClickLogout={onClickLogout} 
      />
    </div>
  );
};

export default LandingPage;
