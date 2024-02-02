import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import '../index.css';

           

function OrdersForms(Props){

  const[OrderName,setOrderName]=useState("");
  const[OrderId,setOrderId]=useState("");
  const[Price,setPrice]=useState("");
  const[CustId,setCustId]=useState("");


  function handleSubmit(event){
    event.preventDefault()
    

    
 const  OrderDetails={

      "orderid":OrderId,
      "ordername":OrderName,
      "price":Price,
      "cust_id":CustId,  
    };

    
    fetch('http://localhost:8080/saveOrder',{
      method: 'POST',
      headers:{'Content-type':'Application/Json'},
      body:JSON.stringify(OrderDetails)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>console.log(err));
  }




    return (
        <div >
          <Form onSubmit={handleSubmit}> 
      <Form.Group> 
          <Form.Label>OrderName:</Form.Label> 
          <Form.Control type="text" 
                        placeholder="Enter Name" Orderame="ordername" onChange={e=>setOrderName(e.target.value)}/> 
        </Form.Group> 
        <br></br>
        <Form.Group> 
          <Form.Label>Enter OrderId:</Form.Label> 
          <Form.Control type="number" 
                        placeholder="Enter OrderId" name="orderid" onChange={e=>setOrderId(e.target.value)} />   
        </Form.Group> 
        <br></br>
        <Form.Group> 
          <Form.Label>Enter Price:</Form.Label> 
          <Form.Control type="text" placeholder="Enter Price" name="price" onChange={e=>setPrice(e.target.value)} /> 
        </Form.Group> 
        <br></br>
        <Form.Group> 
          <Form.Label>Enter gender:</Form.Label> 
          <Form.Control type="text" placeholder="Enter CustId" name="cust_id" onChange={e=>setCustId(e.target.value)} /> 
        </Form.Group> 
        <br></br>

        <Button variant="primary" type="submit"> 
           Post Order details
        </Button> 
      </Form> 
    </div> 
    );

}
export default OrdersForms;