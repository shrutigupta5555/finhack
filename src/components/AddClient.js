import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import UserService from "../services/user";

function AddClient() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const history = useHistory();

    function performValidation() {
      return email.length > 0 && phone.length == 10 && fullName.length > 0;
    }
    function handleSubmit(event) {
      event.preventDefault();
      console.log(fullName, email, phone)
      UserService.addClients(fullName, email, phone).then(
        () => {
          history.push('/home');
        },
        error => {
          console.log(error.response.data.message)
    }
    )
    }

    return (
        <div className="client-container">

            <main>
            <section className="container">
                <div className="card login">
                    <form onSubmit={handleSubmit}>
                        <p>
                            Full Name <br/>
                            <input type="text" value={fullName} onChange={(e) => {setFullName(e.target.value)}}/>
                        </p>
                        <p>
                            Email <br/>
                            <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </p>
                        <p>
                            Phone Number <br/>
                            <input type="text" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                        </p>




                    <button type="submit" disabled={!performValidation()}>Add</button>



                    </form>


            </div>

            </section>
        </main>
        </div>
    )
}

export default AddClient
