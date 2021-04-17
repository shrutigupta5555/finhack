import React from 'react'
import logo from  '../assets/logo.png'

export default function Login() {
    return (
        <section className="container">
             <div className="card login">
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
               
                <button>Log In</button>

                <p class="sign-up">Don't have an account? <a  href="/sign-up">Sign-up</a></p>
            </form>
          
        </div>

        </section>
       
    )
}
