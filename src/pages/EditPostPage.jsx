import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';
import styled from 'styled-components';
import usePostStore from '../store/postStore';

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

const Loading = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #666;
`;

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = usePostStore();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find(p => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/posts');
    }
  }, [id, posts, navigate]);

  if (!post) return <Loading>로딩 중...</Loading>;

  return (
    <Container>
      <Header>
        <Title>게시글 수정</Title>
        <BackButton onClick={() => navigate('/posts')}>목록으로 돌아가기</BackButton>
      </Header>
      <PostForm 
        post={post} 
        onCancel={() => navigate('/posts')}
      />
    </Container>
  );
};

export default EditPostPage; 