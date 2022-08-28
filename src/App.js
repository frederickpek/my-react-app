import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Homepage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Go to home page</Link>
        <Link to="/counter?startValue=0">Go to counter page</Link>
        <Link to="/people-list">Go to people page</Link>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/counter" element={<CounterButtonPage />} />
          <Route path="/people-list" element={<PeopleListPage />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
