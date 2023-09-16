import React from 'react'

const Register = () => {
    let image = "./images/login.png"
    return (
        <div>
            <img className='login_image' src={image} />
            <div className='login_form'>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='password' />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Register