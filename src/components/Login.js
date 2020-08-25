import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_ACCESS,
            access: input,
        })
        setInput('')
    }

    return (
        <div>
            <form onSubmit={signIn}>
                <div>
                    <Button onClick={signIn}>
                        <h1>Sign In</h1>
                    </Button>
                </div>
                <input value={input} onChange={e => setInput(e.target.value)}/>
            </form>
        </div>
    )
}

export default Login
