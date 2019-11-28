import React from 'react';
 
function SessionLength (props){
    return(
        <section>
        <h4>Session length</h4>
        <section className = "interval-container">
            <button>Down</button>
            <p className = "Interval-length">{props.SessionLength}</p>
            <button>Up</button>
        </section>
        </section>
    )
}
export default SessionLength;