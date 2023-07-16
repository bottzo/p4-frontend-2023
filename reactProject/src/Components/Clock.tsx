/*import React from "react"

export type tUser = {name:string, surname:string};

(props: tUser) => <h1>Hola {props.name}</h1>;

export default class WelcomeClass extends React.Component {
    render(): React.ReactNode {
        return <h1>Hola {this.props.name}</h1>;
    }
}*/
import React from 'react'

export default class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {date: new Date().toLocaleTimeString()};
    }

    render(): React.ReactNode {
        return(
            <>
                <h1>Hola</h1>
                <h2>Son las {this.state.date}</h2>
            </>
        )
    }

    componentDidMount(): void {
        const tick = () => { this.setState({date: new Date().toLocaleTimeString()}); }
        this.timerId = setInterval(tick, 1000);
    }

    componentWillUnmount(): void {
        clearInterval(this.timerId);
    }
}

function RandomFunc (a)
{
    let b;
    function RandomFunc2(){
        return console.log(a(b));
    }
}