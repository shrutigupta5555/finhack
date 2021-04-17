import React,{useState, useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function Invoice() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')

   const [item, setItem] = useState('')
   const [rate, setRate] = useState('')
   const [hours, setHours] = useState('')
   const [total, setTotal] = useState(0)

   const [row, setRow] = useState([])

    function addRow(e) {
        const newRow = [item,rate,hours];
        setRow([...row, newRow]) 
        setItem("")
        setRate("")
        setHours("")   
        
        
        

    }


    useEffect(() => {
        
        row.forEach(item => {
            const r = parseInt(item[1]);
            const h = parseInt(item[2])
            setTotal(total + r * h)
        })
    
    }, [row])
    
   



    return (
        <div className="client-container">
            <h2>Generate Invoice</h2>
            <main>
            
            <section className="container" >
                
                <div className="card login"  ref={ref}>
                    <form>
                        <p>
                            Client's Name<br/>
                            <input type="text"  onChange={(e)=> setName(e.target.value)}/>
                        </p>
                        <p>
                            Email <br/>
                            <input type="text"  onChange={(e)=> setEmail(e.target.value)}/>
                        </p>
                        <p>
                            Phone Number <br/>
                            <input type="text"     onChange={(e)=> setPhone(e.target.value)}/>
                        </p>

                        <hr/>

                        <h3 className="payment-h3">Payment Details</h3>
                        <table>
                            <tr>
                                <th>Item</th>
                                <th>Rate</th>
                                <th>Hours</th>
                            </tr>
                            {row.map(item => {
                                return (<tr>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                </tr>)
                            })}

                            
                            
                            
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="total"> Total<span> ${total}</span> </td>
                            </tr>

                            
                        </table>
                        <div className="icon">
                                <input type="text"  value={item}  onChange={e => setItem(e.target.value)}/>
                                <input type="text" value={rate}  onChange={e => setRate(e.target.value)}/>
                                <input type="text" value={hours}  onChange={e => setHours(e.target.value)}/>
                            <AddIcon className="plus" onClick={(e)=>{addRow(e)}}></AddIcon>
                        </div>




                       
            

                    
                    </form>

                   
            </div>

            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
            </section>

        </main>
        </div>
    )
}

export default Invoice
