import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BubbleSort from './pages/bubbleSort';
import QuickSort from './pages/quickSort';
const AppRoutes = () => {

  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/bubbleSort" />} />
                <Route path="/bubbleSort" element={<BubbleSort />} />
                <Route path="/quickSort" element={<QuickSort />} />
            </Routes>
        </Router>
    </div>
  );
}

export default AppRoutes
