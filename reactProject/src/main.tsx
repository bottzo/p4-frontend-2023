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

const elements = (
  <div>
    <h1>Hi react from {getFullName(user)}</h1>
    <h1>Hi react from {getFullName({name:"Bob", surname:"Smth"})}</h1>
  </div>
);

const myArr = [1, 3*4, null, " Hola"];
const element = <h1>{myArr}</h1>;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
element
);