import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Department from './Components/AddDepartments/Department';
import ViewDepartment from './Components/ViewDept/ViewDepartment';
import SingleDept from './Components/SingleDept/SingleDept';
import DeptHead from './Components/DeptHead/DeptHead';
import AddHead from './Components/AddHead/AddHead';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import ViewEmployee from './Components/ViewEmployee/ViewEmployee';
import SingleEmployee from './Components/SingleEmployee/SingleEmployee';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hospital Management</h1>
      <Routes>
        <Route path='/addDepartment' element={<Department/>}/>
        <Route path='/viewDepartment' element={<ViewDepartment/>}/>
        <Route path='/singleView/:id' element={<SingleDept/>}/>
        <Route path='/addHead' element={<AddHead/>}/>
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/viewEmployee' element={<ViewEmployee/>}/>
        <Route path='/employee/:id' element={<SingleEmployee/>}/>
        <Route path='/deptHead/:name' element={<DeptHead/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
