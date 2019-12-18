import React, {useState} from 'react'
import { axiosWithAuth } from '../helpers/AxiosWithAuth'

const Login = (p) => {
    // const [err, setErr] = useState()
    const [data, setData] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value})
    }

const handleSubmit = e =>{
    e.preventDefault()
    axiosWithAuth()
        .post('/login', data)
        .then(r =>{
            console.log(r)
            // sessionStorage.setItem('username', r.data.credentials.username)
            localStorage.setItem('token', r.data.payload)
            p.history.push('/protected')
        })
        .catch(err =>{
            console.log(err)
        })
}

return(
    <form className='form-container' onSubmit={handleSubmit}>
        <h2>Please Log In</h2>
        <div className='login-container'>
            <input type='text'
                   name='username'
                   placeholder='username'
                   value={data.username}
                   onChange={handleChange}/>
            <input type='text'
                   name='password'
                   placeholder='password'
                   value={data.password}
                   onChange={handleChange}/>
            <button className="alt-button" type="submit">Sign In</button>
        </div>
    </form>
)
}

export default Login
