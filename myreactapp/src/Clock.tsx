import React from "react"

export default class Clock extends React.Component{
    itId: number = 0;
    constructor(props: {color:string}){
        super(props);
        this.state = {date: new Date()};
    }
    render(): React.ReactNode {
        return (
            <>
                <h1 style={{color: this.props.color}}>Time: {this.state.date.toLocaleTimeString()}</h1>
            </>
        )
    }
    componentDidMount(): void {
        this.itId = setInterval(() => this.setState({date: new Date()}) , 1000)
    }
    componentWillUnmount(): void {
        clearInterval(this.itId);
    }
}