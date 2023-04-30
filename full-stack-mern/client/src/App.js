import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/views/Main';
import Update from "./components/Update"
import Detail from "./components/Detail"
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default /> //adding the default makes this the default path
          <Route element={<Detail />} path="/people/:id" />
          <Route element={<Update />} path="/people/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;