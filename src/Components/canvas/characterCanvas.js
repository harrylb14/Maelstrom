import React, { useContext, useState } from 'react'
import PlayerContext from '../../config/playerContext';


export default function CharacterCanvas() {

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
                <label for="id">Rename</label>
                <input type="text" id="rename" onChange={e => handleChange(e)}/>
                <input type="submit" id="submit_rename"/>
                </form>
            </div>
            <div style={{fontSize: '12px', width: '700px', wordWrap: 'break-word'}}>{JSON.stringify(PlayerObj)}</div>
        </div>
    )
}

