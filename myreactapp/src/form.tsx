import React from "react";

export default class NameForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {iValue: "", sValue: ""}; 
    }

    handleChange = (e) => { e.preventDefault(); this.setState({iValue: e.target.value.toUpperCase()})}

    handleSubmit = e => {e.preventDefault(); alert(`Se ha decidido el nombre ${this.state.iValue}`)}

    handleSelect = e => {e.preventDefault(); this.setState({sValue: e.target.value})}

    render(): React.ReactNode {
        return (
        <form onSubmit={this.handleSubmit}>
            <label> Name:
                <input type="text" value={this.state.iValue} onChange={this.handleChange}/>
            </label>
            <select value={this.state.sValue} onChange={this.handleSelect}>
                <option value="orange">Orange</option>
                <option value="apple">Apple</option>
                <option value="pear">Pear</option>
                <option value="grape">Grape</option>
                <option value="melon">Melon</option>
                <option value="waterMelon">Water Melon</option>
            </select>
            <input type="submit" value="SUBMIT" />
        </form>
        );
    }
}