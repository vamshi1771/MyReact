import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'; 
import '../index.css';



function InputForm(props){
    return (
    <Form.Group> 
    <Form.Label>{props.label} :</Form.Label> 
    <Form.Control 
                  placeholder={props.placeholder}  name={props.name}/> 
  </Form.Group>

    );
}
export default InputForm;