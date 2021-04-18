import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Invoice from './Invoice';
import UserService from '../services/user';

function Client({client_name,client_email,client_phone_no,activateAddClient, invoiceRoute}) {

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
             <p><span className="name">{client_name}</span> </p>
             <p>Status : <span class="status">Pending</span> </p>
        </div>
      
       
     </div>

     <button className="button" onClick={(e)=> invoiceRoute(e)}>Generate New Invoice</button>
    
     </div>
    </div>
    
 )
}


function Clients({activateAddClient, invoiceRoute}) {

    const [client, setClient] = useState([])

    useEffect(() => {
        UserService.getClient().then(response =>
            setClient(response)
        )
    }, [])

    return (
        <div className="client-container">
        
            {client.map(item => < Client {...item} activateAddClient={activateAddClient} invoiceRoute={invoiceRoute}/>)}
            
        </div>
    )
}

export default Clients
