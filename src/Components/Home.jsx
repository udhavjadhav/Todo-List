import React from "react";
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Data from "./Data";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import styled from "styled-components";

const Home = () => {
    let history = useNavigate();

    //#Edit Operation
    const handleEdit = (id, name, salary, dateOfJoining) => {
        localStorage.setItem('Id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Salary', salary);
        localStorage.setItem('DateOfJoining', dateOfJoining);
    }

    // #DELETE Operation
    const handleDelete = (id) => {
        let index = Data.map((e) => {
            return e.id
        }).indexOf(id);

        Data.splice(index, 1);
        history('/');

    }
    const Container = styled.div`
        text-align: center;
        margin: 0 5%;

        .dropdown-toggle{
            margin: 0 0 1rem;
        }
    `
    const Button = styled.button`
        background-color:#0d6efd;
        padding: 8px;
        color: white;
        border-radius: 8px;
        border: none;
     
    `
    const Heading = styled.h1`
        font-style: italic;
        margin-top: 3rem;
    `
    const Filter = styled.button`
        position: sticky;
        background-color:#0d6efd;
        padding: 5px;
        border-radius: 5px;
        color: white;
        border: none;
        float: right;
    `

    return (
        <>
            <Container>
                <Heading>Todo List</Heading>
                <Container>
                    <Filter className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter
                    </Filter>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">By Name</a></li>
                        <li><a className="dropdown-item" href="#">By Salary</a></li>
                        <li><a className="dropdown-item" href="#">By Month</a></li>
                    </ul>
                </Container>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Salary
                            </th>
                            <th>
                                Date of Joining
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data && Data.length > 0
                                ?
                                Data.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Salary}
                                            </td>
                                            <td>
                                                {item.DateOfJoining}
                                            </td>
                                            <td>
                                                <Link to={`/edit`}>

                                                    <EditOutlinedIcon onClick={() => handleEdit(item.id, item.Name, item.Salary, item.DateOfJoining)} />
                                                </Link>
                                                <DeleteOutlineOutlinedIcon sx={{ mx: 3, cursor: 'pointer' }} color="error" onClick={() => handleDelete(item.id)} />
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                        }

                    </tbody>

                </Table>
                <br />
                <Link className="d-grid gap-2" to={'/create'}>
                    <Button color="primary" size="lg">Add Todo</Button>
                </Link>
            </Container>
        </>
    )
}

export default Home;

