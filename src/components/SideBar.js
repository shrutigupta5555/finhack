import React, {useState} from 'react'


function SideBar({selectRoute, selectedRoute}) {

    const [clientRouteSideBar, setclientRouteSideBar] = useState(false)
    const [myProfileSideBar, setmyProfileSideBar] = useState(true)

    const active = {
        color :'grey'
    }

    const notActive = {
        color: 'black'
    }

    return (
        <div className="sidebar" onClick={(e) => selectRoute(e)}>

            

            <h3 style={notActive}>My Clients</h3>
            <h3 style={active} onClick={()=>setmyProfileSideBar(!myProfileSideBar)}>My Profile</h3>
            <h3>Logout</h3>

            
            
        </div>
    )
}

export default SideBar
