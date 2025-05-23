import { Card, CardContent, IconButton, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <Card>
        <CardContent>
            <Typography variant='h6' style={{display:'flex', alignItems:'center'}}>
                {project.title}
                {project.featured && 
                <IconButton>
                    <StarIcon  color='primary' />
                     </IconButton>}
            </Typography>
            <Typography variant='body2'>
                {project.description}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default ProjectCard