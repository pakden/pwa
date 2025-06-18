import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ApplyPage from './pages/ApplyPage';
import ApprovalPage from './pages/ApprovalPage';
import InspectionPage from './pages/InspectionPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/approval" element={<ApprovalPage />} />
        <Route path="/inspection" element={<InspectionPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
