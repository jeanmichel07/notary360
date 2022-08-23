import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserSession, getUser } from '../../Utils/Common';
import './Login.css'

const Login= ()=>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = ()=>{
        setError(null);
        setLoading(true)
        axios.post("http://localhost:4000/login", {
            username: username,
            password: password
        }).then(rsp=>{
            setLoading(false);
            setUserSession(rsp.data.token, rsp.data.user);
            window.location.reload()
        }).catch(err=>{
            setLoading(false);
            if(err.response.status === 401 || err.response.status === 400){
                setError(err.response.data.message)
            }else{
                setError("une erreur s\'est produite")
            }
        });
    }

    return (
        <>
            <div className="div-form-login">
                <form className="form-login">
                    <div className="div-logo">
                        <img src="/logo.png" className="h-32" width="50%" />
                    </div>
                    {error && <div className="bg-opacity-10 bg-danger div-error"><span className="text-danger">{error}</span></div>}
                    <div className="form-group">
                        <label className="form-label">Pseudo</label>
                        <input className="form-control" type="text" placeholder="Ex: notaire1" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Mots de passe</label>
                        <input className="form-control" type="password" placeholder="******" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="form-check div-remember">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Se souvenir de moi
                        </label>
                    </div>
                    <div className="form-group btn-form">
                        <input className="btn btn-primary" type="button" value={loading ? "Verifier...":"Se connecter"} onClick={handleLogin}/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login