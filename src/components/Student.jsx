import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DataContext from "./DataContext";

import './Student.css'



const Student = () => {
    const context = useContext(DataContext);
    const navigate = useNavigate();
    console.log(context)

    const addstu = () => {
        navigate('/addstudent')
    }
    return (
        <div>
            <button className='btnadd' onClick={addstu}>Add New Student</button>
            <table border={1}>
                <thead>
                    <tr>
                        <td >Name</td>
                        <td>Age</td>
                        <td>Course</td>
                        <td>Batch</td>
                        <td>Change</td>
                    </tr>
                </thead>
                <tbody>
                    {

                        context.entries.map((i, index) => {
                            return (
                                <tr key={index}>

                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>{i.course}</td>
                                    <td>{i.batch}</td>
                                    <td>
                                        <Link to='/editstudent' state={{ data: index }}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Student