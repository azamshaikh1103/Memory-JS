import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
root.render(
    <App className='overflow-y-scroll scrollbar-thin scrollbar-track-blue-100'/>
);