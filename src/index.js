import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <ToastContainer 
      position='top-right'
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
      theme='dark'
      />
       <App />
    </Router>
  </React.StrictMode>
);
