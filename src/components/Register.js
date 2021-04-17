import React from 'react'
import logo from  '../assets/logo.png'

export default function Register() {
    return (
        <main>
        <section className="container">
            <div className="card">
            <div className="img-container">
                 <img src={logo} alt="Logo"/>
            </div>
            
            <form>
                <p>
                    Email <br/>
                    <input type="text"/>
                </p>
                <p>
                    Password <br/>
                    <input type="text"/>
                </p>

                <p>
                    Confirm Password <br/>
                    <input type="text"/>
                </p>
               
                <button>Log In</button>

                <p class="sign-up">Already a user? <a  href="/login">Log In</a></p>
            </form>
          
        </div>
        </section>
        </main>
    )
}