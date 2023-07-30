import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from "./Clock"
import Todos from './Todos'
import NameForm from './form'
import FileInput from './FileInput'
import Temperatures from './Temperatures'

class ActionLink extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {active: true};
  }
  render(): React.ReactNode {
    return(
    <>
      <a href="#" onClick={(e) => { e.preventDefault(); this.setState( (prevState) => ({active: !prevState.active}) ) }}>{(this.state.active) ? "Hide" : "Show"}</a>
      {this.state.active && this.props.children};
    </>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  (<>
    <h1>Hi</h1>
    <Temperatures />
    <FileInput />
    <NameForm />
    <ActionLink>
      <Clock color="blue"/>
    </ActionLink>
    <Todos/>
  </>)
)
