import React, {useState} from 'react'


function SideBar({selectRoute}) {

    

    return (
        <div className="sidebar" onClick={(e) => selectRoute(e)}>
            <h3>My Clients</h3>
            <h3>My Profile</h3>
            <h3>Logout</h3>
        </div>
    )
}

export default SideBar
