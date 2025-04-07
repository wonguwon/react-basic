import React, { useRef } from 'react';

const UseRefScroll = () => {
  // 객체 형태로 useRef 관리
  const scrollRef = useRef({
    main: null,
    about: null,
    history: null,
  });

  // 스크롤 이동 함수
  const handleScrollView = (sectionKey) => {
    scrollRef.current[sectionKey]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 내비게이션 영역 */}
      <nav style={{ position: 'fixed', top: 0, backgroundColor: '#fff', width: '100%', zIndex: 1000 }}>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: '1rem' }}>
          <li><button onClick={() => handleScrollView('main')}>메인페이지</button></li>
          <li><button onClick={() => handleScrollView('about')}>회사소개</button></li>
          <li><button onClick={() => handleScrollView('history')}>회사이력</button></li>
        </ul>
      </nav>

      {/* 본문 영역 */}
      <div style={{ paddingTop: '80px' }}>
        <section
          ref={(el) => (scrollRef.current.main = el)}
          style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#f0f8ff' }}
        >
          <h1>메인페이지 - 김민재</h1>
          <p>...김민재 관련 기사 내용...</p>
        </section>

        <section
          ref={(el) => (scrollRef.current.about = el)}
          style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#e6f7ff' }}
        >
          <h1>회사소개 - 고려아연</h1>
          <p>...고려아연 관련 기사 내용...</p>
        </section>

        <section
          ref={(el) => (scrollRef.current.history = el)}
          style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#fff5e6' }}
        >
          <h1>회사이력 - 한문철</h1>
          <p>...한문철 관련 기사 내용...</p>
        </section>
      </div>
    </>
  );
};

export default UseRefScroll;
