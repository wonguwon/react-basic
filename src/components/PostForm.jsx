import { useState } from 'react';
import usePostStore from '../store/postStore';
import {
  FormContainer,
  Input,
  TextArea,
  Button,
  FormTitle,
  LoadingOverlay,
  ErrorMessage
} from './styled/PostForm.styled';

const PostForm = ({ post = null, onCancel }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');
  const [error, setError] = useState(null);
  const { addPost, updatePost, loading } = usePostStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      if (post) {
        await updatePost(post.id, { title, body });
      } else {
        await addPost({ title, body });
      }
      setTitle('');
      setBody('');
      if (onCancel) onCancel();
    } catch (error) {
      setError(error.message || '처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {loading && (
        <LoadingOverlay>
          <div>처리 중...</div>
        </LoadingOverlay>
      )}
      <FormTitle>{post ? '게시글 수정' : '새 게시글 작성'}</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        required
        disabled={loading}
      />
      <TextArea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="내용"
        required
        disabled={loading}
      />
      <div>
        <Button type="submit" disabled={loading}>
          {post ? '수정' : '작성'}
        </Button>
        {onCancel && (
          <Button type="button" onClick={onCancel} disabled={loading}>
            취소
          </Button>
        )}
      </div>
    </FormContainer>
  );
};

export default PostForm; 