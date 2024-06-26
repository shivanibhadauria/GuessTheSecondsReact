import { useRef, useState } from 'react'
import './Heading.css'

export default function Heading(){
const [name, setName] =useState(null);

const playername = useRef("")



function handleSubmitName(){
    setName(playername.current.value);
    playername.current.value=" ";
}

    return(<body>
    
    <div className="container">
        <h1 className="top">THE <span>ALMOST</span> FINAL COUNTDOWN</h1>
        <h3>stop the timer once you estimate that time is (almost) up</h3>

        <h2 >Wellcome {name ? name : "Unkown Entity"}</h2>
        <div className="inputContainer">
            <input   ref={playername}   className="input" type="text" placeholder="enter something" />
            <button onClick={handleSubmitName} className="btn">Set Name</button>
        </div>

        
    </div>

   
    
    </body>)

}