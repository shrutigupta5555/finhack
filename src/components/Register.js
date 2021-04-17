import React, { useEffect, useState } from "react";
import logo from  '../assets/logo.png'

import AuthService from "../services/auth";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    function performValidation() {
      return email.length > 0 && password.length > 0 && passwordConfirm == password;
    }
    function handleSubmit(event) {
      event.preventDefault();
      console.log(name, email, password)
      AuthService.register(name, email, password)
    }
    return (
        <section className="container">
            <div className="card">
            <div className="img-container">
                 <img src={logo} alt="Logo"/>
            </div>

            <form onSubmit={handleSubmit}>
                <p>
                    Name <br/>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </p>
                <p>
                    Email <br/>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </p>
                <p>
                    Password <br/>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                </p>

                <p>
                    Confirm Password <br/>
                    <input type="text" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
                </p>

                <button disabled={!performValidation()}>Register</button>

                <p class="sign-up">Already a user? <a  href="/login">Log In</a></p>
            </form>

        </div>
        </section>

    )
}
