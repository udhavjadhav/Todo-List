import React from "react";
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Data from "./Data";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './Home.css'

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

    return (
        <>
            <div className="container text-center">
                <h1 className="m-5">Todo List</h1>

                <div class="filter">
                    <button class="btn btn-primary dropdown-toggle mb-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">By Name</a></li>
                        <li><a class="dropdown-item" href="#">By Salary</a></li>
                        <li><a class="dropdown-item" href="#">By Month</a></li>
                    </ul>
                </div>

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
                    <Button size="lg">Add Todo</Button>
                </Link>
            </div>
        </>
    )
}

export default Home;






















// import React, { useState } from 'react';
// import styled from 'styled-components';

// const TodoListWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 600px;
//   width: 100%;
// `;

// const TodoInput = styled.input`
//   font-size: 18px;
//   padding: 10px;
//   width: 100%;
// `;

// const TodoButton = styled.button`
//   background-color: #4CAF50;
//   border: none;
//   color: white;
//   padding: 10px;
//   margin-top: 10px;
//   cursor: pointer;
// `;

// const TodoItem = styled.li`
//   font-size: 18px;
//   padding: 10px;
//   background-color: #f9f9f9;
//   border: 1px solid #ddd;
//   margin-top: -1px;
//   position: relative;

//   &:hover {
//     background-color: #f1f1f1;
//   }
// `;

// const TodoButtonDelete = styled.button`
//   background-color: #f44336;
//   color: white;
//   border: none;
//   padding: 10px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   cursor: pointer;
// `;

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const newTodos = todos.filter((todo, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <TodoListWrapper>
//       <h1>Todo List</h1>
//       <TodoInput
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Add a new todo..."
//       />
//       <TodoButton onClick={handleAddTodo}>Add</TodoButton>
//       <ul>
//         {todos.map((todo, index) => (
//           <TodoItem key={index}>
//             {todo}
//             <TodoButtonDelete onClick={() => handleDeleteTodo(index)}>
//               X
//             </TodoButtonDelete>
//           </TodoItem>
//         ))}
//       </ul>
//     </TodoListWrapper>
//   );
// }

// export default TodoList;
