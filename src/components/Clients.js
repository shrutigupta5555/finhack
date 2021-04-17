import React from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

function Client({activateAddClient}) {

return ( 
    <div className="single-client">
    <div className="single">
    <div className="top-client">
        <h3>Clients</h3>
        <button className="add-client button" onClick = {(e)=>activateAddClient(e)} >Add</button>
    </div>
    
     <div className="client">
        
        <div className="circle"></div>
        <div className="client-info">
             <p><span class="name">John Doe</span> </p>
             <p>Status : <span class="status">Pending</span> </p>
        </div>
     </div>
    
     </div>
    </div>
    
 )
}


function Clients({activateAddClient}) {
    return (
        <div className="client-container">
        
           < Client activateAddClient={activateAddClient}/>   
        </div>
    )
}

export default Clients
