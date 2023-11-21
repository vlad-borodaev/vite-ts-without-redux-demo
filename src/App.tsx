import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HttpCodeList } from './pages/HttpCodeList';
import { HttpCodeDetails } from './pages/HttpCodeDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HttpCodeList />} />
        <Route path="/:code" element={<HttpCodeDetails />} />
      </Routes>
    </div>
  );
}

export default App
