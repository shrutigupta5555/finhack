import React, { useEffect, useState } from "react";
import logo from  '../assets/logo.png'
import { useHistory } from "react-router-dom";

import AuthService from "../services/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    function performValidation() {
    return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
      event.preventDefault();
      console.log(email, password)
      AuthService.login(email,password).then(
        () => {
          history.push('/home');
        },
        error => {
          console.log(error.response.data.message)
    }
    )}
    return (
        <main>
        <section className="container">
             <div className="card login">
            <div className="img-container">
                 <img src={logo} alt="Logo"/>
            </div>

            <form onSubmit={handleSubmit}>
                <p>
                    Email <br/>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </p>
                <p>
                    Password <br/>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                </p>

                <button disabled={!performValidation()}>Log In</button>

                <p class="sign-up"> Dont have an account? <a  href="/sign-up">Sign-up</a></p>
            </form>

        </div>

        </section>
        </main>
    )
}
