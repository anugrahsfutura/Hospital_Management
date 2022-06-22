import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Department from './Components/Departments/Department';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hospital Management</h1>
      <Routes>
        <Route path='/department' element={<Department/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
