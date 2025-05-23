import { Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <Typography variant='h3' color='error'>
            404 - page not found
        </Typography>
        <Typography>
            The page you are looking for does not exist.
        </Typography>
    </div>
  )
}

export default NotFound