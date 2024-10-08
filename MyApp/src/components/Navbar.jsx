import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar >
                
                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow:1}} >YAMSCART</Typography>
                  


                    <Link to='/home'>
                        <Button variant='contained' >HOME</Button>
                    </Link>
                    &nbsp;
                    <Link to='/add'>
                        <Button variant='contained' >Add</Button>
                    </Link>&nbsp;
                </Toolbar>
            </AppBar>
            <br /><br />
        </div>
  )
}
   
export default Navbar