import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import Booklist from './Booklist.jsx';
import Addbooks from './Addbooks.jsx';
import Editbooks from './Editbooks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path = '/' element = {<App />}/>
    <Route path = 'booklist' element = {<Booklist />}/>
    <Route path='/add' element = {<Addbooks />} />
    <Route path='/edit' element = {<Editbooks />} />
  </Routes>
  </BrowserRouter>
)
