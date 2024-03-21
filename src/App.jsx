import React from "react";
import ListEmployee from "./component/ListEmployee";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from "./component/AddEmployee";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployee />}/>
          <Route path='/employees' element={<ListEmployee />}/>
          <Route path='/add-employee' element={<AddEmployee />}/>
          <Route path='/edit-employee/:id' element={<AddEmployee />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
