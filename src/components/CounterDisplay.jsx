import React from "react";
import styled from "styled-components";
import useCounterStore from "../store/useCounterStore";

const DisplayContainer = styled.div`
  font-size: 32px;
  margin: 16px;
  padding: 20px;
  background-color: ${props => props.theme.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const CountText = styled.span`
  font-weight: bold;
  color: ${props => props.theme.primary};
`;

export default function CounterDisplay() {
  // zustand store에서 count 값만 구독
  const count = useCounterStore((state) => state.count);

  return (
    <DisplayContainer>
      현재 카운트: <CountText>{count}</CountText>
    </DisplayContainer>
  );
} 