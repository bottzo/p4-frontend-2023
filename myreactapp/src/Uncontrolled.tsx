import React from "react"

export default class Uncontrolled extends React.Component{
    constructor(props)
    {
        super(props)
        this.input = React.createRef();
    }

    onSubmit = (e) => {e.preventDefault(); alert(`The final name is ${this.input.current.value}`)}

    render(): React.ReactNode {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Name:
                    <input ref={this.input}/>
                </label>
                <input type="submit" value="SUBMIT"/>
            </form>
        );
    }
}