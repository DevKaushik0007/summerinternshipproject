import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

{/* <header>
    
<nav>
    <div class="logo_ul">
       


        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Series</a></li>
            <li><a href="">Kids</a></li>
        </ul>
    </div>
    </nav>
    </header> */}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
