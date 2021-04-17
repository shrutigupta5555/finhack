import React, {useState} from 'react'
import SideBar from './SideBar'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Client from './Clients'
import MyProfile from './MyProfile'

function Home() {

    const [selectedRoute, setselectedRoute] = useState('')


    function selectRoute(e) {
        if(e.target.className!='sidebar'){
            
            setselectedRoute(e.target.textContent)
        }
        
    }

    return (
        <div >
            <SideBar selectRoute={selectRoute}/>
            {selectedRoute == 'My Clients' && <Client/> }
            {selectedRoute == 'My Profile' && <MyProfile/> }
        </div>
    )
}

export default Home
