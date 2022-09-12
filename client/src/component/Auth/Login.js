import React, {useState} from 'react'
import { Container, Grid, Paper, TextField, Stack, Button, Box, Typography } from '@mui/material';
//mport KeySharpIcon from '@mui/icons-material/KeySharp';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import {StyledPaper} from '../../style/login'
import useValidateReg from '../helper/validateReg';



function Login(props) {
  const [user,setUser] = useState({
    email:"",
    password:"",
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
      await axios.post(`/api/v1/auth/login`,user).then(res =>{
        toast.success("login successful")
        localStorage.setItem('loginToken', true)
        navigate('/')
        window.location.reload();
      }).catch(err => toast.error(err.response.data.msg));
    }catch(error){
      toast.error(error.response.data.msg)
    }
  }


  return (
    <StyledPaper>
    <Container>
      <Grid container sx={{my:6}}>
        <Grid item xs={12} md={6} sx={{margin:'0px auto', display:'flex',justifyContent:'center'}}>
         <Paper sx={{width:'350px',height:'60vh'}} elevation={10}>
          <Stack component='form' autoComplete='off' onSubmit={submitHandler} spacing={2} sx={{padding:2}}>
            <Box sx={{flexGrow:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <Typography variant="h4">
                Login
              </Typography>
              {/* <KeySharpIcon color='success' fontSize='large'/> */}
              
              
            </Box>

              <TextField color="secondary" label="Email" type='email' name='email' value={user.email} onChange={readValue} />
              {
              errors && errors.email ? (
                <Typography color='red' fontSize={"0.8rem"}>{errors.email}</Typography>
              ) : null
            }
              <TextField color="secondary" label="Password" type='password' name='password' value={user.password} onChange={readValue} />
              {
              errors && errors.password ? (
                <Typography color='red' fontSize={"0.8rem"}>{errors.password}</Typography>
              ) : null
            }
              <Box sx={{display:'flex',justifyContent:'center'}}>
                <Button type='submit' color='success' variant='contained'>Login</Button>
                
              </Box>
              <Typography>Do you have an account ? <NavLink to={'/register'}>Sign up
              </NavLink></Typography>
          </Stack>
          
         </Paper>
        </Grid>
      </Grid>
    </Container>
    </StyledPaper>
  )
}

export default Login
