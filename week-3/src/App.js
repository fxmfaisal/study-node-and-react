import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Debug from './components/debug';
import Dashboard from './components/dashboard';
import Employee from './components/employee';
import EmployeeAdd from './components/employee/add';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/add" element={<EmployeeAdd />} />
        <Route path="/debug" element={<Debug />} />
      </Routes>
    </div>
  );
}

export default App;
