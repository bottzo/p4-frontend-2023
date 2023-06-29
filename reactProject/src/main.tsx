import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'

type tUser = {name:string, surname:string}

const user : tUser = {
  name:"James",
  surname: "Bond"
}

function getFullName(user: tUser)
{
  return `${user.name} ${user.surname}`;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <h1>Hi react from {getFullName(user)}</h1>
    <h1>Hi react from {getFullName({name:"Bob", surname:"Smth"})}</h1>
  </div>
);