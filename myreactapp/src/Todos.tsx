import React from "react"

export default class Todos extends React.Component{
    constructor(props: {color:string}){
        super(props);
        this.state = {todos: []};
    }
    render(): React.ReactNode {
        return (
            <>
                <h1>Lista de Todos</h1>
                <ul>
                    {this.state.todos.map((element: {userId: number, id: number, title: string, completed: boolean}) => <li key={element.id} style={{color:(element.completed) ? "green":"red"}}>{element.title} is {(element.completed) ? "done" : "undone"}</li>)}
                </ul>
            </>
        );
    }
    /*componentDidMount(): void {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => this.setState({todos: data}));
    }*/
    async componentDidMount(): Promise<void> {
        const json = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await json.json();
        this.setState({todos: data});
    }
}