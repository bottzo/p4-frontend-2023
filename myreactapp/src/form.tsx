import React from "react";

export default class NameForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {value:""}; 
    }

    handleChange = (e) => { e.preventDefault(); this.setState({value: e.target.value.toUpperCase()})}

    handleSubmit = e => {e.preventDefault(); alert(`Se ha decidido el nombre ${this.state.value}`)}
    
    render(): React.ReactNode {
        return (
        <form onSubmit={this.handleSubmit}>
            <label> Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="SUBMIT" />
        </form>
        );
    }
}