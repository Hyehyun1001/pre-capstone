import React from 'react';
import ReactDOM from 'react-dom/client';  // ReactDOM from 'react-dom' 대신 'react-dom/client'로 변경
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
