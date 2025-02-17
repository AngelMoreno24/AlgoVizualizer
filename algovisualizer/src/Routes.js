import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BubbleSort from './pages/bubbleSort';
import QuickSort from './pages/quickSort';
import InsertionSort from './pages/insertionSort';
import Home from './pages/home';
import SelectionSort from './pages/selectionSort';
import MergeSort from './pages/mergeSort';
import HeapSort from './pages/heapSort';

const AppRoutes = () => {

  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/bubble-sort" element={<BubbleSort />} />
                <Route path="/quick-sort" element={<QuickSort />} />
                <Route path="/insertion-sort" element={<InsertionSort />} />
                <Route path="/selection-sort" element={<SelectionSort />} />
                <Route path="/merge-sort" element={<MergeSort />} />
                <Route path="/heap-sort" element={<HeapSort />} />
            </Routes>
        </Router>
    </div>
  );
}

export default AppRoutes
