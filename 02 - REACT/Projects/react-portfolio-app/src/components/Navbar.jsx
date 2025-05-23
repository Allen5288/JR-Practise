import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6' sx={{flexGrow: 1}}>
                <Button color='inherit' component={Link} to='/'>Portfolio</Button>
            </Typography>
            <Button color='inherit' component={Link} to='/'>Home</Button>
            <Button color='inherit' component={Link} to='/about'>About</Button>
            <Button color='inherit' component={Link} to='/projects'>Projects</Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar