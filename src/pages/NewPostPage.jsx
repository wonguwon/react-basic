import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #333;
  margin: 0;
`;

const BackButton = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #5a6268;
  }
`;

const NewPostPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Title>새 게시글 작성</Title>
        <BackButton onClick={() => navigate('/posts')}>목록으로 돌아가기</BackButton>
      </Header>
      <PostForm onCancel={() => navigate('/posts')} />
    </Container>
  );
};

export default NewPostPage; 