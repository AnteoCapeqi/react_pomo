import React from 'react';
 
function SessionLength (props){
    function DecreaseSession(){
        if (props.sessionLength === 1){
            return;
        }
        props.onDecreaseSessionLength();
    }
    function IncreaseSession(){
        if (props.sessionLength === 60){
            return;
        }
        props.onIncreaseSessionLength();
    }
    return(
        <section>
        <h4>Session length</h4>
        <section className = "interval-container">
            <button onClick={DecreaseSession}>Down</button>
            <p className = "Interval-length">{props.SessionLength}</p>
            <button onClick={IncreaseSession}>Up</button>
        </section>
        </section>
    )
}
export default SessionLength;