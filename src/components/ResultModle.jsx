import {ref, forwardRef } from "react"
import './ResultModle.css'


const ResultModle =  forwardRef(function ResultModle({onResat, targetTime, timeRemaining}, ref){

    const userLost = timeRemaining<=0;
    const formatedTime = (timeRemaining/1000).toFixed(2);
    const score =Math.round((1 - timeRemaining/(targetTime*1000))* 100);
    const totalscore = Math.round ((1-targetTime/(timeRemaining*1000))* 100);
    return (<>
        <dialog ref={ref} 
        
        
        >  
            { userLost ? <h1>you  lost </h1>: <h1>you score : { score} / {totalscore}</h1>}
            <p>The target time was {targetTime} </p>
            <p>You stopped the timer with {formatedTime}seconds left</p>

            <form method="dialog" onSubmit={onResat}>
                <button>Close</button>

            </form>


        </dialog></>


    )
})

export default ResultModle;