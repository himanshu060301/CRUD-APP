import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import Code from './components/Code';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Code />} />
          <Route path='/all' element={<AllUser />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
