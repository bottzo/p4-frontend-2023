import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from "./Clock"
import Todos from './Todos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  (<>
    <h1>Hi</h1>
    <Clock color="blue"/>
    <Todos/>
  </>)
)
