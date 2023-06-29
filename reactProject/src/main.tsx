import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'

type tUser = {name:string, surname:string}

let user : tUser = {
  name:"James",
  surname: "bond"
}

function GetFullName(user: tUser)
{
  return `${user.name} ${user.surname}`
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <h1>Hi react from {GetFullName(user)}</h1>
);