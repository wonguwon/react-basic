import React, { useState } from "react";
import styled from "styled-components";
import useTodoStore from "../store/useTodoStore";

const InputContainer = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export default function TodoInput() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요..."
        />
        <AddButton type="submit">추가</AddButton>
      </InputContainer>
    </form>
  );
} 