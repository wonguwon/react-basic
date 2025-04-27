import React from "react";
import styled from "styled-components";
import useTodoStore from "../store/useTodoStore";

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 8px 0;
  background-color: ${props => props.theme.secondary};
  border-radius: 4px;
  transition: all 0.3s ease;
`;

const Checkbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const TodoText = styled.span`
  flex: 1;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? props.theme.border : props.theme.text};
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  background-color: transparent;
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    border-color: ${props => props.theme.primary};
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    border-color: ${props => props.theme.primary};
  }
`;

export default function TodoList() {
  const { getFilteredTodos, toggleTodo, deleteTodo, setFilter, filter } = useTodoStore();
  const todos = getFilteredTodos();

  return (
    <ListContainer>
      <FilterContainer>
        <FilterButton
          active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          전체
        </FilterButton>
        <FilterButton
          active={filter === 'active'}
          onClick={() => setFilter('active')}
        >
          진행중
        </FilterButton>
        <FilterButton
          active={filter === 'completed'}
          onClick={() => setFilter('completed')}
        >
          완료
        </FilterButton>
      </FilterContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <TodoText completed={todo.completed}>{todo.text}</TodoText>
          <DeleteButton onClick={() => deleteTodo(todo.id)}>삭제</DeleteButton>
        </TodoItem>
      ))}
    </ListContainer>
  );
} 