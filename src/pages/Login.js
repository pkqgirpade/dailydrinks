import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../styles/Login.css'

const Login = () => {

    const USER_TEST = {
        username : 'nuser',
        password : 'nuser'
    }

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault()

        if(USER_TEST.username === userData.username)
            history.push('/home')
        else
            alert('user error')
    }

    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData,
            [name] : value
        })
    }

    return (
        <div className='main' >
            <form classname='inputForm' onSubmit={submitHandler} >
                Username: <input type='text' name='username' onChange={inputHandler} /><br />
                Password: <input type='password' name='password' onChange={inputHandler} /><br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;