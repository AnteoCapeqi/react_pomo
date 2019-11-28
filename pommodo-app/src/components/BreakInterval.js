import React from 'react';

function BreakInterval(props){
    function decreaseCounter(){
        if (props.BreakInterval === 1){
            return;
        }
    }
    function increaseCounter(){
        if (props.BreakInterval === 60){
            return;
        }
        props.onIncreaseBreak();
    }

    return (
        <section>
        <h4>Break</h4>
        <section className ="interval-container">
            <button onClick={decreaseCounter}>Down</button>
            <p className = "Interval-length">{props.BreakInterval}</p>
            <button onClick={increaseCounter}>Up</button>
        </section>
        </section>
    );
}
export default BreakInterval;