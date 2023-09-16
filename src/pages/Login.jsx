import React, { useRef, useState } from 'react'
import "./pages.css"
import { getUser, login } from '../Api/auth'
import { useAuth } from '../context/auth.context'
import {useHistory} from 'react-router-dom'


const Login = () => {
    let {user, setUser} = useAuth()
    let image = "./images/login.png"
    const [email, setemail] = useState("user@test.com")
    const [password, setpassword] = useState("1234")

    const history = useHistory()


    const handleLogin = async ()=>{
        let response = await login({email, password})
        if(response.status == 200){
            // set authentication context
            user = await getUser(response.data.token)
            if (response.status == 200){
                setUser({
                    token: response.data.token,
                    id: user.data.ID,
                    email: user.data.email,
                    name: user.data.name,
                    surname: user.data.surname
                })
                localStorage.setItem("user", JSON.stringify({
                    token: response.data.token,
                    id: user.data.ID,
                    email: user.data.email,
                    name: user.data.name,
                    surname: user.data.surname
                }))
                console.log(response, user);
                history.push("/home")
            }
        } else {
            alert("login failed")
        }        
    }

    return (
        <div className='login'>
            <img className='login_image' src={image} />
            <div className='login_form'>
                <input onChange={(e)=> setemail(e.target.value)} value={email} type="text" placeholder='email' />
                <input onChange={(e)=> setpassword(e.target.value)} value={password} type="password" placeholder='password' />
                <button onClick={(e)=>{e.preventDefault(); handleLogin()}}>Login</button>
            </div>
        </div>
    )
}

export default Login