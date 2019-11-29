import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();

        this.state = {
            isSession : true,
            TimerSecond : 0,
            intervalId : 0
        };
        this.play=this.play.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);



    }
    play(){
        let intervalId = setInterval(this.decreaseTimer,1000);
        this.setState({
            intervalId: intervalId
        })
    }
    decreaseTimer(){
        switch (this.state.TimerSecond){
            case 0:
                this.props.onUpdateTimerMinute()
                this.setState({
                    TimerSecond : 59
                })
                break;
            default:
                this.setState((prevState) =>{
                    return{
                        TimerSecond: prevState.TimerSecond -1
                    }
                })
                break;
        }
    }
    render(){
        return(
            <section>
                <section className="timer-container">
                    <h4>{this.state.isSession === true ? "Session" : 
                    "Break"}</h4>
                    <span className="timer">{this.props.TimerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.state.TimerSecond === 0 ? "00" :
                    this.state.TimerSecond < 10 ? "0" +
                    this.state.TimerSecond : this.state.TimerSecond}</span>
                </section>
                <section className="timer-action">
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Refresh</button>
                </section>
            </section>
        );
    }
}
export default Timer;