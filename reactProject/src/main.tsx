import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'

type tUser = {name:string, surname:string};

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

const namesJsx = [<li key="abc">"James"</li>, <li key="def">"Paulo"</li>];
let element = <ul>{namesJsx}</ul>;

const names = ["James", "Paulo"];
element = <ul>{names.map((element,idx)=> <li key={idx}>{element}</li>)}</ul>;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<Welcome name ="James" surname = "Bond"/>
);


function Welcome(props: tUser){
  return <h1>Hola {props.name}</h1>;
}