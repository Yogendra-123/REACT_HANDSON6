import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext'


const EditStudent = () => {

    const context = useContext(DataContext);
    const location = useLocation();
    const navigate = useNavigate();
    const index = (location.state.data)



    const newObj = {
        name: context.entries[index].name,
        age: context.entries[index].age,
        course: context.entries[index].course,
        batch: context.entries[index].batch
    }
    const handleChange = (event) => {
        newObj[event.target.name] = event.target.value
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        context.updatefunc(
            (prevObj) => {
                prevObj[index] = newObj;
                return (prevObj)
            }
        );
        navigate('/student');

    }
    const goback = () => {
        navigate('/student')
    }

    return (
        <>
            <div className='arrangeinputs'>
                <form >
                    <label >Name :</label>
                    <br />
                    <input className='input' type="text" onChange={handleChange} name="name" ></input>
                    <br />
                    <label>Age :</label>
                    <br />
                    <input className='input' type="number" onChange={handleChange} name="age" ></input>
                    <br />
                    <label>Course :</label>
                    <br />
                    <input className='input' type="text" onChange={handleChange} name="course" ></input>
                    <br />
                    <label>Batch :</label>
                    <br />
                    <input className='input' type="text" onChange={handleChange} name="batch" ></input>
                    <br />
                    <button onClick={goback} className='btn2' >Cancel</button>
                    <button onClick={handleUpdate} className='btn' >Update</button>
                </form>
            </div>
        </>
    )
}

export default EditStudent