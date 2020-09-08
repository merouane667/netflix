import React,{useState} from 'react';
import './Register.css'
import Axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../Home";

toast.configure();
const Register = (props) => {

    const [register, setstate] = useState();
    const url = 'http://127.0.0.1:8000/api/register';
    const change = (e) => {

        setstate({
            ...register,
            [e.target.name]: e.target.value
        })
    }
    const add = async (object) => {

        try {
            const { data } = await Axios.post(url, object);
            localStorage.setItem('token', data.token);
            console.log(data.message);
            toast.success("You Are Successfully Register");
            if (data.success == true) {
              setTimeout(function () {
                props.history.push("/accueil");
              }, 1000);
            }

        } catch (error) {
            toast.error(error.response.data.message);

        }





    }
    const send = (e) => {
        e.preventDefault();
        add(register)

    }


    return (
        <header class="showcase">

            <div className="logo_lien">
                <div class="logo">
                    <img src="/logo.png" />

                </div>
                
            </div>

            <div class="showcase-content">
                <div class="formm">
                    <form>
                        <h1>Register</h1>
                        <div class="info">
                            <input name="name" class="name" type="name" placeholder="Name" onChange={change} /> <br />
                            <input name="email"  class="email" type="email" placeholder="Email" onChange={change}/> <br />
                            <input name="password"  class="password" type="password" placeholder="Password" onChange={change} />
                        </div>
                        <div class="btn">
                            <button class="btn-xl" type="submit" onClick={send}>Sign Up</button>
                        </div>
                        <div class="help">
                            <div>
                                <input value="true" type="checkbox" /><label>Remember me</label>
                            </div>

                            <a href="">Need Help ?</a>

                        </div>

                    </form>

                </div>

                <div class="fcbk">
                    <a href="">
                        <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                    </a>
                    <p>Register with Facebook</p>
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

export default Register;
