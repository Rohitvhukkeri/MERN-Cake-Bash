import React, { useState } from 'react'
import { Container, Grid, Paper, TextField, Stack, Button, Box, Typography, Alert } from '@mui/material';
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { StyledPaper } from '../../style/login';
import useValidateReg from '../helper/validateReg';

function Register(props) {
  const [user,setUser] = useState({
    email:"",
    password:"",
    name:"",
    mobile:""
  }) 

  const navigate = useNavigate();
  const { errors, validate} = useValidateReg()

  const readValue = (e) =>{
    const { name, value } = e.target;
    validate(name,value);
    setUser({...user, [name]:value})
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      await axios.post(`/api/v1/auth/register`,user).then(res =>{
        toast.success("user registered successfully")
        navigate('/')
      }).catch(err => toast.error(err.response.data.msg));
    }catch(error){
      toast.error(error.response.data.msg)
    }
  }


  return (
    <StyledPaper>
    <Container>
      <Grid container sx={{my:7}} >
        <Grid item xs={12} md={6} sx={{margin:'0px auto',display:'flex',justifyContent:'center'}}>
         <Paper sx={{width:'350px',height:'75vh'}} elevation={10}>
          <Stack component='form' onSubmit={submitHandler}  sx={{padding:2}}>
            <Box sx={{flexGrow:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <Typography variant="h4">
                Register
              </Typography>
              <HowToRegSharpIcon color='success' fontSize='large'/>
            </Box>
            <TextField sx={{mt: 1}} color="secondary" label="Name" type="text" name='name' value={user.name} onChange={readValue} />
            {
              errors && errors.name ? (
                //<div className='alert alert-danger'>{errors.name}</div>
                <Typography color='red' fontSize={"0.8rem"}>{errors.name}</Typography>
              ) : null
            }
            <TextField sx={{mt: 1}} color="secondary" label="Email" type="email" name='email' value={user.email} onChange={readValue} />
            {
              errors && errors.email ? (
                <Typography color='red' fontSize={"0.8rem"}>{errors.email}</Typography>
              ) : null
            }
            <TextField sx={{mt: 1}} color="secondary" label="Mobile" type="number" name='mobile' value={user.mobile} onChange={readValue} />
            {
              errors && errors.mobile ? (
                <Typography color='red' fontSize={"0.8rem"}>{errors.mobile}</Typography>
              ) : null
            }
            <TextField sx={{mt: 1}} color="secondary" label="Password" type='password' name='password' value={user.password} onChange={readValue} />
            {
              errors && errors.password ? (
                <Typography color='red' fontSize={"0.8rem"}>{errors.password}</Typography>
              ) : null
            }
            <Box sx={{display:'flex',justifyContent:'center',mt: 2}}>
              <Button type='submit' color='success' variant='contained'>Sign Up</Button>
            </Box>
          </Stack>
          
         </Paper>
        </Grid>
      </Grid>
    </Container>
  </StyledPaper>
  )
}

export default Register