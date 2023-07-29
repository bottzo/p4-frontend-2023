import React from "react";

export default class NameForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {iValue: "", sValue: "", sValues: []}; 
    }

    handleChange = (e) => { e.preventDefault(); this.setState({iValue: e.target.value.toUpperCase()})}

    handleSubmit = e => {e.preventDefault(); alert(`Se ha decidido el nombre ${this.state.iValue}`)}

    handleSelect = e => {e.preventDefault(); this.setState({sValue: e.target.value})}

    handleMSelect = e => {e.preventDefault(); 
        let newArr: Array<string> = [];
        if (this.state.sValues.find((x:string) => x === e.target.value) === undefined)
        {
            newArr = this.state.sValues.map((x:string) => x);
            newArr.push(e.target.value);
        }
        else
            newArr = this.state.sValues.filter((word:string) => word !== e.target.value);
        this.setState({sValues: newArr})
    }

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
            <select multiple={true} value={this.state.sValues} onChange={this.handleMSelect}>
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