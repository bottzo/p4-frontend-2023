import React from "react";

export default class NameForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {value:""}; 
    }

    handleChange = (e) => { e.preventDefault(); this.setState({value: e.target.value.toUpperCase()})}
    render(): React.ReactNode {
        return (
        <form>
            <label> Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
        </form>
        );
    }
}