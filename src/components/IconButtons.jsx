import { FaTrashAlt, FaEdit, FaPlus, FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background-color: ${({ color }) => color || '#3498db'};
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }

  svg {
    font-size: 1rem;
  }
`;

function IconButtons() {
  return (
    <Wrapper>
      <Title>
        <FaArrowLeft /> 아이콘 버튼
      </Title>

      <Button>
        <FaPlus />새 글 작성
      </Button>

      <Button color="#f39c12">
        <FaEdit />
        수정
      </Button>
      <Button color="#e74c3c">
        <FaTrashAlt />
        삭제
      </Button>
    </Wrapper>
  );
}

export default IconButtons;
