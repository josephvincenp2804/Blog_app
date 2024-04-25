import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';

const AddBlog = ({props,update}) => {


  var[post,setPost] = useState({title:'',post:'',image:''})
  var location =useLocation();
  console.log("location:",location.state)
  const navigate=useNavigate();

  useEffect(()=>{
    if(location.state!=null){
      setPost({...post,title:location.state.val.title,
                       post: location.state.val.post,
                       image:location.state.val.image})
    }
    else{
      setPost({...post,title:'',post:'',image:''})
    }
  },[])

    const inputHandler = (e) =>{
        setPost({...post,[e.target.name]:e.target.value})
        console.log(post)
    }

    const addPost = ()=>{
     if (location.state!=null) {
      var upId = location.state.val._id
      axios.put("http://localhost:3008/api/edit/"+upId,post)
      .then((res)=>{
        if(res.data.message == "Blog updated successfully"){
          alert(res.data.message)
          navigate('/view')
        }
        else{
          alert("user not found")
        }
      })
     } else {
      console.log("btn",post)
      axios.post("http://localhost:3008/api/addblog",post)
      .then((res)=>{
        alert(res.data.message)
        navigate('/view')
      })
      .catch((err)=>{
        console.log(err)
      })
     }
    }
  return (
    <div style={{margin:'6%'}}>
     <Typography>Add Blogs</Typography><br/><br/>
     <Grid container spacing={2}>
       
       <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' label='post title' value={post.title} fullWidth name='title' onChange={inputHandler} />
       </Grid>

       <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' label='type a post' value={post.post} fullWidth rows={10} multiline name='post' onChange={inputHandler}/>
       </Grid>

       <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' label='IMAGE URL' value={post.image} fullWidth name='image' onChange={inputHandler}/>
       </Grid>

       <Grid item xs={12} sm={12} md={12}>
        <Button variant='contained' color='secondary' onClick={addPost}>Add Blog</Button>
       </Grid>

     </Grid>
    </div>
  )
}

export default AddBlog
