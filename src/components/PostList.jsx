import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePostStore from '../store/postStore';
import {
  Container,
  PostCard,
  Title,
  Content,
  Button,
  DeleteButton,
  Loading,
  Error,
  ButtonContainer,
  LoadingOverlay
} from './styled/PostList.styled';

const PostList = () => {
  const { posts, loading, error, fetchPosts, deletePost } = usePostStore();
  const [deletingPostId, setDeletingPostId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id) => {
    setDeletingPostId(id);
    await deletePost(id);
    setDeletingPostId(null);
  };

  if (loading && posts.length === 0) return <Loading>로딩 중...</Loading>;
  if (error) return <Error>에러 발생: {error}</Error>;

  return (
    <Container>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <Title>{post.title}</Title>
          <Content>{post.body}</Content>
          <ButtonContainer>
            <Button 
              onClick={() => navigate(`/posts/${post.id}/edit`)}
              disabled={loading}
            >
              수정
            </Button>
            <DeleteButton 
              onClick={() => handleDelete(post.id)}
              disabled={loading}
            >
              {deletingPostId === post.id ? '삭제 중...' : '삭제'}
            </DeleteButton>
          </ButtonContainer>
          {deletingPostId === post.id && (
            <LoadingOverlay>
              <div>삭제 중...</div>
            </LoadingOverlay>
          )}
        </PostCard>
      ))}
    </Container>
  );
};

export default PostList; 