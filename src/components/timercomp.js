import Clock from './timer';
import { Component } from "react";

class TimerComp extends Component {
    state = {clicked: false};
 handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})
 }

 constructor(props) {
  super(props);
  this.state = {
    deadline: 'Feb, 23, 2024'
  }
}
    render(){
        
    return(
        <>
        <Clock deadline = {this.state.deadline} />
        </>
    )
}

}
export default TimerComp;