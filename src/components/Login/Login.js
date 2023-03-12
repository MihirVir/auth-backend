import React, {useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom";
import {useNavigate}  from "react-router-dom";
import './login.css'
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState();
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:8000/api/auth/login`;
        
        const res = await axios.post(url, {username, password});
        
        setResult(res.data.token);

        localStorage.setItem("token", JSON.stringify(res.data.token));
        if (res.status === 201 || res.status === 200) {
            setUsername(" ");
            setPassword(" ");
            navigate("/")
        }
    }
    
    return (
        <>
            <section className = "login-section-page bg-black">
                <h1 className = "text-neutral-50 login-heading">Login</h1>
                <div className="login-section-container bg-zinc-800">
                    <form onSubmit={handleOnSubmit} className = "login-page-form">
                        <div className="single-inp-container">
                            <label className = "pb-2 text-neutral-50" >Username</label>
                            <input autoComplete='false' value = {username} name = "username" onChange={(e) => setUsername(e.target.value)} className = "text-white bg-zinc-700 custom-inp-login" placeholder = "enter username" type="text" />
                        </div>
                        <div className="single-inp-container">
                            <label className='pb-2 text-neutral-50'>Password</label>
                            <input  autoComplete='false' value = {password} name = "password" onChange = {(e) => setPassword(e.target.value)} className = "text-white bg-zinc-700 custom-inp-login" placeholder = "enter password" type="password" />
                        </div>
                        <div className="helper-login-container">
                            <div className="button-sep">
                                <button className =  "btn-login-submit" type = "submit">
                                    Login
                                </button>
                            </div>
                            <div className="information-redirect">
                                <span className = "text-neutral-50 redirectors" >Forgot Password?</span>
                                <span className='text-neutral-50 redirectors'>
                                    <Link to = "/register">
                                        Create Account
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login