import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import Data from "./Data";
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

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

    const Component = styled.div`
        text-align: center;
        margin: 0 5%;
    `
    const Heading = styled.h1`
         font-style: italic;
         margin: 3rem;
    `
    const Button = styled.button`
        width:100%;
        background-color: #0d6efd;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px;
    `
    return(
        <Component>
            <Heading>Edit Todo</Heading>
            <Component>
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
            </Component>
        </Component>
    )
}
export default Edit;