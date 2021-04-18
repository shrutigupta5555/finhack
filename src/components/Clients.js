import React from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Invoice from './Invoice'
import USerService from "../services/user";
function Client({activateAddClient, invoiceRoute}) {

function handleClick(e) {
    console.log(true)
}
    






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
             <p><span className="name">John Doe</span> </p>
             <p>Status : <span class="status">Pending</span> </p>
        </div>
      
       
     </div>

     <button className="button" onClick={(e)=> invoiceRoute(e)}>Generate New Invoice</button>
    
     </div>
    </div>
    
 )
}


function Clients({activateAddClient, invoiceRoute}) {
    return (
        <div className="client-container">
        
           < Client activateAddClient={activateAddClient} invoiceRoute={invoiceRoute}/>   
        </div>
    )
}

export default Clients
