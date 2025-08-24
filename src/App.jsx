import './App.css';
import { Routes, Route } from 'react-router-dom';
import Postpage from './pages/Post/PostPage';
import PostidPage from './pages/postid/Postidpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostidPage />} />
    </Routes>
  );
}

export default App;
