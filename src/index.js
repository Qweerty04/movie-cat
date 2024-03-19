import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import style from './index.module.scss';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Your App Title</title>
      <meta name="description" content="Description of your app" />
      {/* Add more meta tags as needed */}
    </Helmet>
    <div className={style.light}>
      <App />
    </div>
  </React.StrictMode>
);
