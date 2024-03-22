// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './pages/Movie';
import SearchPage from './pages/Search';
import style from './App.module.scss';



function App() {
  const [pixelRatio, setPixelRatio] = useState(window.devicePixelRatio);

  useEffect(() => {
    const updatePixelRatio = () => {
      setPixelRatio(window.devicePixelRatio);

      // Set the --zoom CSS variable at root (outside useEffect)
      document.documentElement.style.setProperty(`--zoom`, pixelRatio);
    };

    const mediaQuery = window.matchMedia(`(resolution: ${pixelRatio}dppx)`);
    mediaQuery.addListener(updatePixelRatio);

    // Cleanup function to remove the listener on unmount
    return () => mediaQuery.removeListener(updatePixelRatio);
  }, []);

  return (
    <div className={style.container}>
      <Router>
        <Routes>
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;