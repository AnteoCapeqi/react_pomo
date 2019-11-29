import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      breakLength : 5,
      sessionLength : 25,
      TimerMinute :25,
    }
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval= this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute= this.onUpdateTimerMinute.bind(this);
  }
  onIncreaseBreakLength(){
    this.setState((prevState) =>{
      return{
        breakLength : prevState.breakLength + 1 
      };
    });
  }
  onDecreaseBreakLength(){
    this.setState((prevState)=>{
      return{
        breakLength: prevState.breakLength - 1
      };
    });
  }
  onIncreaseSessionLength(){
    this.setState((prevState)=>{
      return{
        sessionLength: prevState.sessionLength + 1,
        TimerMinute : prevState.sessionLength + 1
      };
    });
  }
  onDecreaseSessionLength(){
    this.setState((prevState)=>{
      return{
        sessionLength: prevState.sessionLength - 1,
        TimerMinute : prevState.sessionLength - 1
      };
    });
  }
  onUpdateTimerMinute(){
    this.setState((prevState)=>{
      return{
        TimerMinute : prevState.TimerMinute - 1
      }
    })
  }
  onToggleInterval(isSession){
    if (isSession){this.setState({
      TimerMinute : this.state.sessionLength
    })
  } else {
    this.setState({
      TimerMinute : this.state.breakLength
    })
  }

  }
  render() {
    return (
      <main>
        <h2>Pommodoro Clock</h2>
        <section className="interval-length-container">
          <BreakInterval BreakInterval={this.state.breakLength}
            onIncreaseBreak={this.onIncreaseBreakLength}
            onDecreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionLength SessionLength={this.state.sessionLength}
            onIncreaseSessionLength={this.onIncreaseSessionLength}
            onDecreaseSessionLength={this.onDecreaseSessionLength}
          />
        </section>
        <Timer 
          TimerMinute={this.state.TimerMinute} breakLength={this.state.breakLength}
          onUpdateTimerMinute={this.onUpdateTimerMinute}
          onToggleInterval={this.onToggleInterval}
        />
      </main>
    );
  }
}

export default App;
