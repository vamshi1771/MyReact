import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';
import InputForm from './InputForm'

import { ClickAwayListener, Snackbar } from "@mui/material";



function Forms(Props) {

  const [CustomerName, setCustomerName] = useState("");
  const [CustomerId, setCustomerId] = useState("");
  const [Region, setRegion] = useState("");
  const [gender, setgender] = useState("");

  const [open, setOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault()

    const Customerdetails = {
      "customerId": CustomerId,
      "customerName": CustomerName,
      "region": Region,
      "gender": gender,
    }

    console.log(Customerdetails);
    fetch('http://localhost:8080/Post', {
      method: 'POST',
      headers: { 'Content-type': 'Application/Json' },
      body: JSON.stringify(Customerdetails)
    })
      .then((res) => res.status)
      .then((data) => {
        const statusCode = data;
      })
      .catch((err) => console.log(err));
  }



  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };



  const handleButtonSubmit = () => {

    setOpen(true);

  }



  const handleNameChange = (e) => {
    const search = e.target.value;
    const ans = search.trim();
    const str = ans.split(" ");
    let temp = "";
    for (let num = 0; num < ((str.length)); num++) {
      if (str[num] === "") continue;
      else temp = temp + str[num] + " ";
    }
    temp = temp.trim();
    setCustomerName(temp);
  }




  return (
    <div >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>CustomerName:</Form.Label>
          <Form.Control className="required-field" required type="text"
            placeholder="Enter CustomerName" name="customername" onChange={handleNameChange} />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>Enter CustomerId:</Form.Label>
          <Form.Control className="required-field" required type="number"
            placeholder="Enter customerId" name="customerid" onChange={e => setCustomerId(e.target.value)} />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>Enter Region:</Form.Label>
          <Form.Control className="required-field" required type="text" placeholder="Enter Region" name="region" onChange={e => setRegion(e.target.value)} />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>Enter gender:</Form.Label>
          <Form.Control className="required-field" required type="text" placeholder="Enter gender" name="gender" onChange={e => setgender(e.target.value)} />
        </Form.Group>
        <br></br>

        <Button variant="primary" type="submit"
          onClick={handleButtonSubmit} disabled={CustomerId ? false : true}>
          Post customer details
        </Button>

        <Snackbar message="Form submitted Successfully!"
          autoHideDuration={4000}
          open={open}
          onClose={handleToClose} />
      </Form>




    </div>
  );

}
export default Forms;











{/* <Form.Group> 
          <Form.Label>CustomerName:</Form.Label> 
          <Form.Control type="text" 
                        placeholder="Enter CustomerName"  name="customername" onChange={e=>setCustomerName(e.target.value)}/> 
        </Form.Group> 
        <br></br>
        <Form.Group> 
          <Form.Label>Enter CustomerId:</Form.Label> 
          <Form.Control required type="number" 
                        placeholder="Enter customerId" name="customerid" onChange={e=>setCustomerId(e.target.value)} />   
        </Form.Group> 
        <br></br>
        <Form.Group> 
          <Form.Label>Enter Region:</Form.Label> 
          <Form.Control type="text" placeholder="Enter Region" name="region"  onChange={e=>setRegion(e.target.value)} /> 
        </Form.Group> 
        <br></br>
        <Form.Group> 
          <Form.Label>Enter gender:</Form.Label> 
          <Form.Control type="text" placeholder="Enter gender" name="gender"  onChange={e=>setgender(e.target.value)} /> 
        </Form.Group> 
        <br></br>

        <Button variant="primary" type="submit"
        onClick={handleButtonSubmit} disabled> 
           Post customer details
        </Button> 
        <Snackbar message="Form submitted Successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleToClose}/>
      </Form>  */}