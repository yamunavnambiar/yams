import React, { useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const Home = () => {
    var [user, setUser] = useState([])
    axios.get(" https://fakestoreapi.com/products")
    .then(response => {
        console.log(response.data)
        setUser(response.data)
    })

  return (
      <div>
        <Grid container spacing={(2)}>
            {user.map((val)=>{
                return(
                    <Grid item xs={12} sm={ 6} md={4}>
                    <Card sx={{ maxWidth: 325 }}>
                        
                    <CardMedia
                        sx={{ height: 400 }}
                            image={val.image}
                            title={val.title}
                        
                        />
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {val.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">Category: {val.category}</Typography>
                        <Typography variant="h6">${val.price}</Typography>

                    </CardContent>

                    </Card>
                  </Grid>
                )
            })}

        </Grid>
      </div>
  )
}

export default Home
