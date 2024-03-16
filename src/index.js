import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import style from './index.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={style.light}>
      <App />
    </div>
  </React.StrictMode>
);
