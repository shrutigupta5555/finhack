import React, {useState, useEffect} from 'react'
import UserService from '../services/user';


function MyProfile() {
    const [myProfile, setmyProfile] = useState([])

    useEffect(() => {
        UserService.getProfile().then(response => {
            setmyProfile(response)
        })
        // setmyProfile({name: 'Simon Max', email: "s@o.com"})
    }, [])

    return (
        
        <div className="client-container">
            <h3 className="h3-myp">My profile</h3>

            
            <section className="container my-profile-wrapper" >
                
                <div className="my-profile"> 
                    <div className="head">
                        <div className="circle"></div>
                        <h2>{myProfile.name}</h2>
                        
                    </div>
                    <div className="info">
                        <p>Email: <span>{myProfile.email}</span></p>
                        <p>Phone Number: <span>+1 8080987236</span></p>
                        <p>Payment ID <span>nwufnwenw</span></p>
                    </div>
                </div>
                    
            </section>

       
        </div>

        
    )
}

export default MyProfile
