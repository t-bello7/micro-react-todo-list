import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoContainer from './components/TodoContainer'
import Form from './components/Form'
import About from './pages/About'
import NotMatch from './pages/NotMatch'
import Navbar from './components/Navbar';
import SinglePage from './pages/SinglePage'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TodoContainer/>}/>
        <Route path="about" element={<About/>}>
          {/* <Route path="about-app" element={<AboutUs/>}/>
          <Route path="about-author" element={<AboutAuthor/>}/> */}
          <Route path=":aboutId" element={<SinglePage/>}/>
        </Route>
        <Route path="handle-form" element={<Form/> } />  
        <Route path="*" element={<NotMatch/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
