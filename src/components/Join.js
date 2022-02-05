import JoinForm from "./JoinForm";
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function Join() {

    function ispis(username, age) {
        alert('Username - ' + username + ' ' + 'Age - ' + age + '. You are part of the game now!')
    }

    return (
        <div className="join_div">
            <h1 id="main_naslov">Welcome... Join Our Game...</h1>
            <JoinForm fja={ispis} />
        </div>
    );
}

export default Join;
