import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Layout from '../routes/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
