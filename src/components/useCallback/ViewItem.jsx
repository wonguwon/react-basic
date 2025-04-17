import React, { useEffect, useState } from 'react';

/*
  ✅ ViewItem: 자식 컴포넌트
  - props로 전달된 getItems 함수로 리스트를 받아 표시
  - getItems 함수가 바뀌면 리렌더됨 → useCallback이 필요한 이유!
*/

const ViewItem = React.memo(({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("🔁 ViewItem 렌더링 / getItems 변경됨");
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      <h4>📦 계산된 아이템 목록</h4>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default ViewItem;
