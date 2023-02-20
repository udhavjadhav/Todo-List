import React, {useState, useEffect} from "react";
import { Button, Form } from "react-bootstrap";
import Data from "./Data";
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

function Edit(){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [dateOfJoining,setDateOfJoining] = useState('');

    const Navigate = useNavigate();
    
    let index = Data.map((e) => {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const a = Data[index];
        a.Name = name;
        a.Salary = salary;
        a.DateOfJoining = dateOfJoining;
        Navigate('/');
    }
    uuid();
    useEffect(()=>{
        setId(localStorage.getItem('Id'))
        setName(localStorage.getItem('Name'))
        setSalary(localStorage.getItem('Salary'))
        setDateOfJoining(localStorage.getItem('DateOfJoining'))
    },[]);  

    return(
        <div className="container text-center my-5 p-5">
            <h1 className="m-5">Edit Todo</h1>
            <Form className="d-grid gap-2">
                <Form.Group className="mb-3" controlId="FormName">
                    <Form.Control type="text" placeholder="Enter Name" maxLength={100} value={name} onChange={(e)=> setName(e.target.value)} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormSalary">
                    <Form.Control type="text" placeholder="Enter Salary" value={salary} onChange={(e)=> setSalary(e.target.value)} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormDate">
                    <Form.Control type="text" placeholder="Enter Date" value={dateOfJoining} onChange={(e)=> setDateOfJoining(e.target.value)} required></Form.Control>
                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)}>Update</Button>
            </Form>
        </div>
    )
}
export default Edit;