import React from "react";
import styled, { ThemeProvider } from "styled-components";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useCounterStore from "./store/useCounterStore";

// 테마 정의
const themes = {
  light: {
    background: '#ffffff',
    text: '#333333',
    primary: '#007bff',
    secondary: '#f8f9fa',
    border: '#dee2e6',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#0d6efd',
    secondary: '#2d2d2d',
    border: '#404040',
  },
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  padding: 40px;
  text-align: center;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

const StyledH2 = styled.h2`
  margin-bottom: 20px;
`;

const StyledHr = styled.hr`
  margin: 32px;
  width: 100%;
  border-color: ${props => props.theme.border};
`;

const ThemeToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.primary};
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${props => props.theme.secondary};
  border-radius: 8px;
  margin-bottom: 20px;
`;

function App() {
  const theme = useCounterStore((state) => state.theme);
  const toggleTheme = useCounterStore((state) => state.toggleTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer>
        <ThemeToggleButton onClick={toggleTheme}>
          {theme === 'light' ? '🌙 다크 모드' : '☀️ 라이트 모드'}
        </ThemeToggleButton>
        
        <Section>
          <StyledH2>Zustand로 전역 상태 관리 실습</StyledH2>
          <CounterDisplay />
          <CounterControls />
        </Section>

        <Section>
          <StyledH2>투두리스트 예제</StyledH2>
          <TodoInput />
          <TodoList />
        </Section>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
