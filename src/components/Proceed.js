import { useState } from 'react'
import { Link } from "react-router-dom";


function Proceed(props) {

    const [name, setName] = useState('');

    function handleName(e) {
        setName(e.target.value);
    }

    return (
        <div className="pocetni_div">
            <h1 id="main_naslov">{props.mainNaslov}</h1>
            <input type="text" id="input-proceed" className="form-control" value={name} onChange={handleName} placeholder="Enter your name to proceed..." />

            <Link to='/join' >
                <button type="button" id='button-proceed' className='btn btn-danger mt-3'>Proceed</button>
            </Link>

        </div>
    );
}

export default Proceed;
