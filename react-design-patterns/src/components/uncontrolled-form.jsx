import React, { createRef } from 'react'


const UncontrolledForm = () => {
    
    
    const nameInputRef = createRef()
    const ageInputRef = createRef()
    
    const submitHandler = (e) => {
        console.log(nameInputRef.current.value);
        console.log(ageInputRef.current.value);
        e.preventDefault()
    }

  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder='Name' ref={nameInputRef} />
      <input name="age" type="number" placeholder='Age' ref={ageInputRef} />
      <input type="submit" value="Submit"  />
    </form>
  )
}

export default UncontrolledForm
