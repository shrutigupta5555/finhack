import React, {useState} from 'react'
import SideBar from './SideBar'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Client from './Clients'
import MyProfile from './MyProfile'
import AddClient from './AddClient'
import Invoice from './Invoice'

function Home() {

    const [selectedRoute, setselectedRoute] = useState('');
    const [addClient, setAddClient] = useState(false);
    const [invoiceRoute, setinvoiceRoute] = useState(false);

    

    function selectRoute(e) {
        if(e.target.className!='sidebar'){
            setselectedRoute(e.target.textContent)
            setAddClient(false)
            setinvoiceRoute(false)
        } 
    }

    function activateAddClient(e) {
        if(!addClient){
            setselectedRoute('')
        }

        setAddClient(!addClient)
        
        console.log(true)
    }

    function generateInvoice(e) {
        if(!invoiceRoute){
            setselectedRoute('')
        }

        setinvoiceRoute(!invoiceRoute)
        
        console.log(true)
    }

   

    return (
        <div >
            <SideBar selectRoute={selectRoute} active={selectedRoute}/>
            {selectedRoute == 'My Clients' && <Client activateAddClient={activateAddClient} invoiceRoute={generateInvoice}/> }
            {selectedRoute == 'My Profile' && <MyProfile/> }
            {addClient && <AddClient/>}
            {invoiceRoute && <Invoice/>}
        </div>
    )
}

export default Home
