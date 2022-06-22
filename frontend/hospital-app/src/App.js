import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Department from './Components/Departments/Department';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/department' element={<Department/>}/>

      </Routes>
      <h1>Hospital Management</h1>
      
    </div>
  );
}

export default App;
