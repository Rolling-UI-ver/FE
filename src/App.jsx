import './App.css';
import { Routes, Route } from 'react-router-dom';
import Postpage from './pages/Post/PostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Postpage />} />
    </Routes>
  );
}

export default App;
