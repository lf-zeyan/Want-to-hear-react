import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.js';
import './index.css'


ReactDOM.render(
    <div className='box'>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>,
    document.getElementById('root'));

