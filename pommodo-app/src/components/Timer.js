import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();

        this.state = {
            isSession : true,
            TimerSecond : 0,
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
                    <button>Play</button>
                    <button>Stop</button>
                    <button>Refresh</button>
                </section>
            </section>
        );
    }
}
export default Timer;