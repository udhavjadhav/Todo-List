import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import Data from './Data'
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

// Creating Todo
const Create = () =>{
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [dateOfJoining, setDateOfJoining ] = useState("");
    const [error, setError] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a = name;
        let b = salary;
        let c = dateOfJoining;

        if(a === '' || b === '' || c === '')
        {
            setError("Please fill all the details!")
        }
        else{
             //Push todo to (Data.jsx)
            Data.push({id: uniqueId, Name: a, Salary: b, DateOfJoining: c});
            Navigate('/');
        }
    }
   
    return <div className="container text-center my-5 p-5">
        <h1 className="m-5">Add Todo</h1>
            <div className="d-grid gap-2">
                <Form.Group className="mb-3" controlId="FormName">
                    <Form.Control type="text" placeholder="Enter Name" maxLength={100} onChange={(e)=> setName(e.target.value)} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormSalary">
                    <Form.Control type="text" placeholder="Enter Salary" onChange={(e)=> setSalary(e.target.value)} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormDate">
                    <Form.Control type="date" placeholder="Enter Date" onChange={(e)=> setDateOfJoining(e.target.value)} required ></Form.Control>
                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
               <p style={{color:'red'}}> {error}</p>
            </div>
        </div>

}
export default Create;
















