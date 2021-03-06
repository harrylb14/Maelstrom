import React, { useContext, useState } from 'react'
import PlayerContext from '../../config/playerContext';

export default function CharacterScreen() {

    const { PlayerObj, dispatch }  = useContext(PlayerContext)
    const [nameValue, setNameValue] = useState(PlayerObj.name)

    function handleSubmit(e) { 
        e.preventDefault(); 
        dispatch({type: 'PLAYER_RENAMED', payload: nameValue}); 
    }

    function handleChange(e) {
        setNameValue(e.target.value)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    {PlayerObj.name ? <div></div> : <label style={{fontSize: "12px"}}>A new identity awaits...</label> }<br></br> 
                    <input type="text" id="rename" onChange={e => handleChange(e)}/>
                    <input type="submit" id="submit_rename" value="Rename"/>
                </form>
            </div>
            <div style={{fontSize: '16px', width: '700px', wordWrap: 'break-word', paddingTop: '20px', paddingBottom: '20px'}}>
                {PlayerObj.name ? <div data-testid="player_name" id="player_name">Name: {PlayerObj.name}</div> : <div></div> }<br></br> 
                <div data-testid="experience" id="experience">Experience gained: {PlayerObj.experience}</div><br></br>
                <div data-testid="level" id="level">Level: {PlayerObj.level}</div><br></br>
                <div data-testid="victories" id="victories">Victories: {PlayerObj.victories}</div><br></br>
                <div data-testid="escapes" id="escapes">Escapes: {PlayerObj.escapes}</div><br></br>
                <div data-testid="base_damage" id="base_damage">Base Damage: {PlayerObj.baseDamage}</div><br></br>
                <div data-testid="strength" id="strength">Strength bonus: {PlayerObj.strength}</div><br></br>
                <div data-testid="defence" id="defence">Defence bonus: {PlayerObj.defence}</div><br></br>
                <div data-testid="money" id="money">Blasei shards: {PlayerObj.money}</div><br></br>
            </div>
        </div>
    )
}
