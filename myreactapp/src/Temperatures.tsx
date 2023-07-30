import React from "react"

export default class Temperatures extends React.Component{
    constructor(props){
        super(props);
        this.changeCelcius = this.changeCelcius.bind(this);
        this.changeFahrenheit = this.changeFahrenheit.bind(this);
        this.state = {fahrenheit: 33.8, celsius: 1.0};
    }
    render(): React.ReactNode {
        return(
            <>
                <TmpBox type="fahrenheit" num={this.state.fahrenheit} change={this.changeFahrenheit} />
                <TmpBox type="celcius" num={this.state.celsius} change={this.changeCelcius} />
            </>
        );
    }
    //boiling(212) and freezing(32) point in fahrenheit are 180 degrees apart (1.8) and 32 offseted as the freezing point is (32)
    changeCelcius(e){
        this.setState({celsius: e.target.value, fahrenheit: e.target.value * 1.8 + 32})
    }
    changeFahrenheit(e){
        this.setState({celsius: e.target.value / 1.8 - 32, fahrenheit: e.target.value})
    }
}

class TmpBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(): React.ReactNode {
        return(
            <form>
                <label>
                    <input type="number" value={this.props.num} onChange={this.props.change}/>
                    {this.props.type}
                </label>
            </form>
        );
    }
}