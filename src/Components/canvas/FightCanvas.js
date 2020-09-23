import OpponentHealthBar from '../../Components/healthbar/enemyHealthbar'
import React, { createRef, useEffect, useContext } from 'react';
import PlayerHealthBar from '../../Components/healthbar/healthbar'
import PlayerContext from '../../config/playerContext.js'
import OpponentContext from '../../config/opponentContext.js'
import AttackAnimation from '../characterAnimation/playerAttacking.js'
import FightRoundsContext from '../../config/fightRoundsContext';

let canvas, ctx;
let cancelAnimationFrame = window.requestAnimationFrame 
                          || window.mozRequestAnimationFrame
                          || window.webkitRequestAnimationFrame
                          || window.msRequestAnimationFrame
                          ;

const FightCanvas = () => {
  
    let canvasRef = createRef(null)
    const { PlayerObj, dispatch }  = useContext(PlayerContext)
    const { OpponentObj, dispatchOpp } = useContext(OpponentContext)
    const { FightRounds, dispatchFight } = useContext(FightRoundsContext)

    let animationFrameId;

    // SET ROUNDS WITH CONTEXT, PASSING THE ROUNDS TO THIS USEFFECT DEPENDENCY ARRAY    
    useEffect(() => {
      
      canvas = canvasRef.current
      ctx = canvas.getContext('2d')
      if (PlayerObj.is_attacking && OpponentObj.is_attacking) {
        dispatch({type: 'set_attack', payload: false});
        dispatchOpp({type: 'set_attack', payload: false});
        dispatchFight({type: 'next_round', payload: 1})
        return
      } else {
        AttackAnimation(PlayerObj, OpponentObj, canvas, ctx);
      }

      if (PlayerObj.is_attacking || OpponentObj.is_attacking) {   
        
        setTimeout(() => { 
            if (OpponentObj.hp < 0) {return} 
            let damage = Math.floor(Math.random()*5) - PlayerObj.defence;
            dispatchOpp({type: 'set_attack', payload: true});
            dispatch({type: 'attacked', payload: ((damage < 0) ? 0 : damage) });
            dispatch({type: 'set_attack', payload: false});
        }, 1500 )

        setTimeout(() => {    
          dispatchOpp({type: 'set_attack', payload: false})
        }, 2000 );

        return () => {
          window.cancelAnimationFrame(animationFrameId)
        } 
      }
    },[PlayerObj])
    
    return (
    <div>
      <div id="healthbars" data-testid="healthbars">
        <PlayerHealthBar PlayerObj={PlayerObj}/>
        <OpponentHealthBar OpponentObj={OpponentObj}/>
       </div>

       <div style={{align: "center"}}>
         <canvas ref={canvasRef} style={{ }} id="game-area" data-testid="game-area" /> 
       </div>
      
    </div>)
}

export default FightCanvas;
