import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

// ✅ 유효성 검사 스키마 정의
const schema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요'),
  email: yup.string().email('유효한 이메일 형식이 아닙니다').required('이메일을 입력해주세요'),
});

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(`입력 성공! 이름: ${data.name}, 이메일: ${data.email}`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <label>이름</label>
      <input type="text" {...register('name')} />
      {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

      <label>이메일</label>
      <input type="email" {...register('email')} />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

      <button type="submit">제출</button>
    </FormWrapper>
  );
}

export default SimpleForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  font-size: 0.875rem;
  color: #e74c3c;
  margin: -8px 0 8px 0;
`;
