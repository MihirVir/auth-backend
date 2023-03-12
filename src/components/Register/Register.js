import React, {useState, useEffect} from 'react'
import "../Login/login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:8000/api/auth/register`
        const res = await axios.post(url, {
            username, 
            password
        });
        if (res.status === 201 || res.status === 200) {
            setUsername(" ");
            setPassword(" ");
            navigate("/login")
        }
    }
    useEffect(() => {
        handleOnSubmit();
    }, [])
  return (
    <>
    {
        error ? (
            <>
                <p>error</p>
            </>
        ) : (
            <>

            <section className = "login-section-page bg-black">
                    <h1 className = "text-neutral-50 login-heading">Register</h1>
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
                                        Register
                                    </button>
                                </div>
                                <div className="information-redirect">
                                    <span className = "text-neutral-50 redirectors" >Forgot Password?</span>
                                    <span className='text-neutral-50 redirectors'>
                                        <Link to = "/register">
                                            Login Account
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
    </>
  )
}

export default Register