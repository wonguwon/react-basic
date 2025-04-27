import React from "react";
import styled from "styled-components";
import useCounterStore from "../store/useCounterStore";

const ControlsContainer = styled.div`
  margin: 16px;
`;

const Button = styled.button`
  margin-right: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.primary};
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default function CounterControls() {
  // zustand store에서 액션만 골라서 사용
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  return (
    <ControlsContainer>
      <Button onClick={increase}>+1</Button>
      <Button onClick={decrease}>-1</Button>
      <Button onClick={reset}>리셋</Button>
    </ControlsContainer>
  );
} 