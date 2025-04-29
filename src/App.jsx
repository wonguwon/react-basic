import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostListPage from './pages/PostListPage';
import NewPostPage from './pages/NewPostPage';
import EditPostPage from './pages/EditPostPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/:id/edit" element={<EditPostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
