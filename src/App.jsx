import { useState } from 'react';
import './App.css';
import IconButtons from './components/IconButtons';
import GlobalStyle from './GlobalStyle';
import ThemedBox from './components/ThemedBox';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { ToastContainer, toast } from 'react-toastify';
import { performToast } from './utils/performToast';
import 'react-toastify/dist/ReactToastify.css';
import SimpleForm from './components/SimpleForm';
import LoaderDemo from './components/LoaderDemo';
import TodoList from './components/TodoList';

// toast.success('요청이 성공했습니다!');
// toast.error('에러가 발생했습니다!');
// performToast({ msg: '등록 완료!', type: 'success' });

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);

  return (
    <>
      {/* <IconButtons /> */}
      {/* <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ThemedBox onToggleTheme={toggleTheme} />
      </ThemeProvider> */}
      {/* <ToastContainer />; */}
      {/* <SimpleForm /> */}
      {/* <LoaderDemo /> */}
      <TodoList />
    </>
  );
}

export default App;
