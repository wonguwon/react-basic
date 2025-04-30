import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemedBox({ onToggleTheme }) {
  return (
    <Wrapper>
      <h2>🧁 테마 테스트 박스</h2>
      <p>현재 테마에 따라 배경/글자 색상이 바뀝니다.</p>
      <ToggleButton onClick={onToggleTheme}>
        <FaSun /> / <FaMoon /> 테마 토글
      </ToggleButton>
    </Wrapper>
  );
}

export default ThemedBox;

const Wrapper = styled.div`
  padding: 40px;
  text-align: center;
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  margin-top: 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.9;
  }
`;
