import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from './DataContext'

const AddStudent = () => {
  const context = useContext(DataContext);
  const navigate = useNavigate()
  const goback = () => {
    navigate('/student')
  }
  const [s, sets] = useState({
    name: '',
    age: '',
    course: '',
    batch: ''
  })

  const studentchange = (e) => {



    console.log(e.target.value)
    sets({ ...s, [e.target.name]: e.target.value })
    console.log(s)



  }
  const submitdata = (e) => {
    e.preventDefault();
    context.updatefunc((prevObj) => {
      prevObj.push(s);
      return (prevObj)
    })
    console.log(context.entries)
    navigate('/student')
  }


  return (
    <>
      <div className='arrangeinputs'>
        <form >
          <label >Name :</label>
          <br />
          <input className='input' type="text" value={s.name} onChange={studentchange} name="name" ></input>
          <br />
          <label>Age :</label>
          <br />
          <input className='input' type="number" value={s.age} onChange={studentchange} name="age" ></input>
          <br />
          <label>Course :</label>
          <br />
          <input className='input' type="text" value={s.course} onChange={studentchange} name="course" ></input>
          <br />
          <label>Batch :</label>
          <br />
          <input className='input' type="text" value={s.batch} onChange={studentchange} name="batch" ></input>
          <br />
          <button onClick={goback} className='btn2' >Cancel</button>
          <button onClick={submitdata} className='btn' >Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddStudent
