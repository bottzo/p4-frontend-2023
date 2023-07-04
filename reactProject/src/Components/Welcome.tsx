import ReactDOM from 'react-dom/client'


export type tUser = {name:string, surname:string};

export default (props: tUser) => <h1>Hola {props.name}</h1>;