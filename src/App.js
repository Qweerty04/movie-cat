// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './pages/movie';
import SearchPage from './pages/search';
import './index.scss';
import './reset.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;