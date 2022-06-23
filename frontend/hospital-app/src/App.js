import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Department from './Components/Departments/Department';
import ViewDepartment from './Components/ViewDept/ViewDepartment';
import SingleDept from './Components/SingleDept/SingleDept';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hospital Management</h1>
      <Routes>
        <Route path='/department' element={<Department/>}/>
        <Route path='/view' element={<ViewDepartment/>}/>
        <Route path='/singleView/:id' element={<SingleDept/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
