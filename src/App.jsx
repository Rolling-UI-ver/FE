import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ListPage from './pages/ListPage.jsx';
import Postpage from './pages/Post/PostPage';
import PostidPage from './pages/postid/Postidpage';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/listpage' element={<ListPage />} />
      //<Route path="/" element={<PostidPage />} />
    </Routes>
  );
}

export default App;
