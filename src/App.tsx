import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { HttpCodeList } from './pages/HttpCodeList';
import { HttpCodeDetails } from './pages/HttpCodeDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/http-codes" element={<HttpCodeList />} />
        <Route path="/http-codes/:code" element={<HttpCodeDetails />} />
        <Route
          path="*"
          element={<Navigate to="/http-codes" replace />}
        />
      </Routes>
    </div>
  );
}

export default App
