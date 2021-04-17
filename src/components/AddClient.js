import React, {useState} from 'react';





function AddClient() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    
    
    return (
        <div className="client-container">
            
            <main>
            <section className="container">
                <div className="card login">
                    <form>
                        <p>
                            Full Name <br/>
                            <input type="text" onChange={(e) => {setFullName(e.target.value)}}/>
                        </p>
                        <p>
                            Email <br/>
                            <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                        </p>
                        <p>
                            Phone Number <br/>
                            <input type="text" onChange={(e) => {setPhone(e.target.value)}}/>
                        </p>
                        
                      
                   

                    <button type="submit">Add</button>
            

                    
                    </form>

                   
            </div>

            </section>
        </main>
        </div>
    )
}

export default AddClient
