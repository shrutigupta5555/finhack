import React, {useState} from 'react'


function SideBar({selectRoute, selectedRoute}) {

    const style = {
        color : 'black'
    }

    const notActive = {
        color: 'grey'
    }
    

    return (
        <div className="sidebar" onClick={(e) => selectRoute(e)}>

            

            <h3 style={style}>My Clients</h3>
            <h3 style={notActive}>My Profile</h3>
            <h3 style={notActive}>Logout</h3>

            
            
        </div>
    )
}

export default SideBar
