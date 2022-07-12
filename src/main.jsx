import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import TodoContainer from './components/TodoContainer'
import Form from './components/Form'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContainer/>
    {/* <Form/> */}
  </React.StrictMode>
)
