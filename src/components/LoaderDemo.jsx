import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

function LoaderDemo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2초 후 로딩 종료
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <SpinnerWrapper>
          <ClipLoader color="#3498db" size={60} />
          <p>불러오는 중...</p>
        </SpinnerWrapper>
      ) : (
        <Content>
          <h2>데이터 로딩 완료!</h2>
          <p>이제 본문을 볼 수 있어요 :)</p>
        </Content>
      )}
    </Wrapper>
  );
}

export default LoaderDemo;

// ✅ styled-components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  flex-direction: column;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555;
`;

const Content = styled.div`
  text-align: center;
`;
