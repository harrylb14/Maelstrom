import React, { useRef, useEffect, useCallback } from 'react';
import healthbar from '../../Components/healthbar/healthbar'
import enemyHealthbar from '../../Components/healthbar/enemyHealthbar'
import Wizard from '../characterAnimation/wizard.js'
import Bandit from '../characterAnimation/bandit.js'

const FightCanvas = (props) => {

    const canvasRef = useRef(null)

    useEffect(() => {
        //  Bandit();
      Wizard(); 
     
      let animationFrameId
     
      return () => {
        window.cancelAnimationFrame(animationFrameId)
    } 
    })
    
    return (
    <div>
       { healthbar } 
       { enemyHealthbar }

       <div style={{align: "center"}}>

         <canvas ref={canvasRef} style={{ }} id="game-area"{...props}/> 
       </div>
      
    </div>)
}


export default FightCanvas