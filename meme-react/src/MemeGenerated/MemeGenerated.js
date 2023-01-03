import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import './MemeGenerated.css'

function MemeGenerated(){

    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');

    return(
        <div>
            <button onClick={() => navigate('/')}>Make More Memes</button>
            <div id='startingDiv'></div>
            <h2>Here You Go...</h2>
            { url && <img src={url} alt='customized meme'/>}
            <h2>You're Very Welcome 😌</h2>
            <div id='endingDiv'></div>
        </div>
    )
}

export default MemeGenerated;