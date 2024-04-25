import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MyProfile = () => {
    const[userId,setUserId] = useState(sessionStorage.getItem("id"));
    const[myData,setMyData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3008/api/viewmypro/"+userId)
        .then((res)=>{
            console.log(res.data)
            setMyData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    // const handleDelete = (id) => {
    //   axios.delete(`http://localhost:3008/api/deleteblog/${id}`)
    //     .then((res) => {
    //       setMyData(data.filter((item) => item._id !== id));
    //     });
    // };

  return (
    <div style={{margin:'10%'}}>
        <Grid container spacing={2}>
           

             {myData.map((val,i)=>{
                 return (
                   
        <Grid item xs={12} sm={4} md={4}>

        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Name:{val.name}
        </Typography>

        <Typography sx={{ fontSize: 15 }} color="text.secondary" >
          Email:{val.email}
        </Typography>

        <Typography sx={{ fontSize: 15 }} color="text.secondary" >
          Address:{val.address}
        </Typography>

        <Typography sx={{ fontSize: 15 }} color="text.secondary" >
          Username:{val.username}
        </Typography>
      
        
       
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        {/* <Button size="small" onClick={()=> handleDelete(val._id)}>Delete</Button> */}
      </CardActions>
    </Card>
                    </Grid>
                )
             })}

        </Grid>
      
    </div>
  )
}

export default MyProfile
