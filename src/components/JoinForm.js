import { useState } from 'react'

function JoinForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div className="joinform">
            <form>
                <div className="fields">
                    <label>Username: </label>
                    <input type="text" id="input_username" className="form-control mt-1 mb-2" value={username} onChange={handleUsername} />
                </div>
                <div className="fields">
                    <label>Age: </label>
                    <input type="number" className="form-control mt-1 mb-2" value={password} onChange={handlePassword} />
                </div>
                <button type="button" onClick={() => props.fja(username, password)} className='btn btn-success btn-lg mt-3' id='dgm'>Join</button>
            </form>
        </div>
    );
}

export default JoinForm;
