import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:3001/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ListWrapper>
      <h2>✅ 할 일 목록</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.completed ? '✔️' : '❌'}
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
}

export default TodoList;

const ListWrapper = styled.div`
  padding: 20px;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 8px 0;
  }
`;
