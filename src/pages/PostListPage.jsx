import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
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

const NewPostButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const PostListPage = () => {
  return (
    <Container>
      <Header>
        <Title>게시글 목록</Title>
        <NewPostButton to="/posts/new">새 게시글 작성</NewPostButton>
      </Header>
      <PostList />
    </Container>
  );
};

export default PostListPage; 