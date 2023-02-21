import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Data from './Data'
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Creating Todo
const Create = () => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [error, setError] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let a = name;
        let b = salary;
        let c = dateOfJoining;

        if (a === '' || b === '' || c === '') {
            setError("Please fill all the details!")
        }
        else {
            //Push todo to (Data.jsx)
            Data.push({ id: uniqueId, Name: a, Salary: b, DateOfJoining: c });
            Navigate('/');
        }
    }

    const handleBack = () =>{
        Navigate('/')
    }

    //Styled Components
    const Container = styled.div`
    text-align: center;
    margin: 0 5%;

    .input{
        margin-bottom: 1.5rem;
    }
    `
    const Heading = styled.h1`
        margin: 3rem;
        font-style: italic;
    `
    const Button = styled.button`
        background-color: #0d6efd;
        padding: 8px;
        color: white;
        border-radius: 8px;
        border: none;
        width: 100%;
    `
    const Text = styled.p`
        color:red;
        margin-top: 5px;
    `

    return <Container>
        <Heading> Add Todo</Heading>
        <Container>
            <Form.Group className="input" controlId="FormName">
                <Form.Control type="text" placeholder="Enter Name" maxLength={100} onChange={(e) => setName(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className="input" controlId="FormSalary">
                <Form.Control type="text" placeholder="Enter Salary" onChange={(e) => setSalary(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className="input" controlId="FormDate" >
                <Form.Control type="date" placeholder="Enter Date" onChange={(e) => setDateOfJoining(e.target.value)} required ></Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
            <Text> {error}</Text>
        </Container>
    </Container>

}
export default Create;
















