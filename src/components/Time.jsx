import { useRef, useState } from 'react'
import './Time.css'
import ResultModle from './ResultModle';

  function Time({title, targetTime }){

    let timer = useRef();
    let dialog = useRef();

   const [activeTimer, setActiveTimer] = useState(targetTime * 1000);

   const timerActive = activeTimer > 0 && activeTimer < targetTime * 1000 ;

   if(activeTimer <= 0){
    clearInterval(timer.current);
    dialog.current.showModal()
   }

   function handleResat(){
    setActiveTimer(targetTime*1000)


   }

function handleStart(){
    timer.current = setInterval(()=>{

setActiveTimer((currTime)=>currTime - 10)   



    }, 10)

}

function handleStop(){
    clearInterval(timer.current)

    dialog.current.showModal();



}

    return (<body>

<ResultModle className="modle" ref={dialog} targetTime={targetTime} timeRemaining={activeTimer} onResat={handleResat} /> 
    <div className="time-container">

        <h3>{title}</h3>
        <div>{targetTime}</div>
        <button onClick={ timerActive  ? handleStop : handleStart }> { timerActive ? "Stop Challange" : "Start challange" }</button>
        <p>{timerActive  ? "Time is running" : "Timer inactive" }</p>
    </div>
    
    
    
    </body>


    )
}

export default Time