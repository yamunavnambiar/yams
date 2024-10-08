import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate=useNavigate()

  // navigate
  const handleSubmit=()=>{
    navigate('/home')
  }

  return (
    <div>
      <h1 >Add Product</h1>
      <TextField label="TITLE" variant="outlined" /><br /><br />
      <TextField label="IMAGE" variant="outlined" /><br /><br />
      <TextField label="PRICE" variant="outlined" /><br /><br />
      <TextField label="CATEGORY" variant="outlined" /><br /><br />
      <Button variant="TEXT" onClick={handleSubmit}>SUBMIT</Button>
    </div>
  )
}

export default Add