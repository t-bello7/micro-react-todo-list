import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TodoContainer from './components/TodoContainer'
import Form from './components/Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContainer/>
    {/* <Form/> */}
  </React.StrictMode>
)
