import React from "react";
import useToggle from "./useToggle";

function ToggleBox() {
  const [isVisible, toggleVisible] = useToggle();

  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? "숨기기" : "보이기"}
      </button>
      {isVisible && <div>짜잔! 보이는 영역입니다 🎉</div>}
    </div>
  );
}

export default ToggleBox;