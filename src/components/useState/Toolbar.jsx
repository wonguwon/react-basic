import React from 'react';

/*
    상태를 직접 변경하지 않도록 onClickLogin과 onClickLogout만 전달받아서 사용합니다. 
    하위 컴포넌트는 상태 값을 읽고, 상태를 변경하는 방법에 대해 알 필요가 없습니다.
*/
const Toolbar = ({ isLogin, onClickLogin, onClickLogout }) => {
  return (
    <div>
      {isLogin ? (
        <div>
          <div style={{ padding: 24 }}>안녕하세요 최지원님</div>
          <button onClick={onClickLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <div style={{ padding: 24 }}>로그인이 필요한 서비스입니다.</div>
          <button onClick={onClickLogin}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
