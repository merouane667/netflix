import React, { useState, useContext , useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Context } from '../DataCenter';



toast.configure()
const Login = (props) => {
    const [login, setstate] = useState();
    const url = 'http://127.0.0.1:8000/api/login';  
    const change = (e) => {

        setstate({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    const add = async (object) => {
 
        try {
            const { data } = await Axios.post(url, object);
            localStorage.setItem('token',data.token);
            toast.success(data.message);
            setstate(data);
            console.log(data.success);
            if (data.success == true) {
              setTimeout(function () {
                props.history.push("/accueil");
              }, 1000);
            }
            

        } catch (error) {
            setstate(error.response.data);
            toast.error(error.response.data.message);

        }
        
        

    }
    const send = (e) => {
        e.preventDefault();
        add(login);
   

    }


return (
<header class="showcase">

    <div className="logo_lien">
        <div class="logo">
            <img src="/logo.png"/>
            
        </div>
        <Link to="/register" class="btn btn-rounded">Sign Up</Link>
    </div>

    <div class="showcase-content">
        <div class="formm">
                <form method='Post' action="http://127.0.0.1:8000/api/login">
                <h1>Sign In</h1>
                <div class="info">
                        <input name="email" class="email" type="email" placeholder="Email" onChange={change}/> <br/>
                        <input name="password" class="email" type="password" placeholder="Password" onChange={change}/>
                </div>
                <div class="btn">
                    <button class="btn-xl" type="submit" onClick={send}>Sign In</button>
                </div>
                <div class="help">
                    <div>
                        <input value="true" type="checkbox"/><label>Remember me</label>
                    </div>

                    <a href="">Need Help ?</a>

                </div>

            </form>

        </div>

        <div class="fcbk">
            <a href="">
                <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
            </a>
            <p>Login with Facebook</p>
        </div>
        <div class="signup">
            <p>New to Netflix ?</p>
            <Link to="/register">Sign up now</Link>
        </div>
        <div class="more">
            <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
            </p>
        </div>


    </div>


    <footer>

        <div class="ftr-content">
            <div class="contact">
                <a href="#">Quesions? Contact us.</a>
            </div>
            <div class="ftr">
                <a href="#">Gift Card Terms</a>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Statement</a>
            </div>
            <div class="select">
                <select>
                    <option>English</option>
                    <option>العربية</option>
                    <option>Français</option>

                </select>
            </div>
        </div>

    </footer>

</header>


);
}

export default Login;