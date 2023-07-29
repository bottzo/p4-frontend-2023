import React from "react"

export default class FileInput extends React.Component{
    constructor(props)
    {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.input = React.createRef();
    }

    //this.input.current.value
    onSubmit(e){e.preventDefault(); alert(`The final name is ${this.input.current.files[0].name}`)}

    render(): React.ReactNode {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    File:
                    <input type="file" ref={this.input}/>
                </label>
                <input type="submit" value="SUBMIT"/>
            </form>
        );
    }
}