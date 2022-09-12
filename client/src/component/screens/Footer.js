import React,{useState} from 'react'
import { Container, Grid, IconButton, Typography } from '@mui/material';
//import Gp from './../../assets/images/gp2.png'
import { Box } from '@mui/system';
import { Avatar, Link, List, ListItem} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {StyledFooter} from '../../style/footer'


function Footer() {
   

  return (
    <StyledFooter>
    <Container>
  <Grid container spacing={1} p={2}>
   <Grid item md={4}   color="Black">
     <Typography marked="left" variant='h6'>About  </Typography>
     <Typography color={'gray'} marginTop='20px'><Typography variant='h5'sx={{color:'orange',fontFamily:'Oleo Script Swash Caps,cursive'}}>Cake-Bash</Typography>deliver fun fast tasty Cake that make you happy,fullfill your comfort Cake cravings.Main motive is quick deliver for busy people 24 X 7. </Typography>
     <Typography marked="left" marginTop='20px'variant='h6' >Social links  </Typography>
     <List>
       <ListItem >
         <Link color='#3b5998' href="https://www.linkedin.com/in/rohit-hukkeri/"><FacebookIcon/></Link>
          <Link color='#8a3ab9' margin=' 0px 5px' href='https://www.instagram.com/ro_hit_vh/?hl=en'><InstagramIcon/></Link>
          <Link color='#FF0000' margin=' 0px 5px' href='https://www.youtube.com/' ><YouTubeIcon/></Link>
          <Link color='#00acee'  margin=' 0px 5px' href='https://twitter.com/rohit_hukkeri'><TwitterIcon/></Link>
          <Link color='#3b5998'  margin=' 0px 5px' href='https://www.linkedin.com/in/rohit-hukkeri/'><LinkedInIcon/></Link>
     </ListItem>
     </List>
   </Grid>
   <Grid item md={3} color="Black">
     <Typography marked="left"  variant='h6'>Terms and condition</Typography>
     <Typography color={'gray'} marginTop='20px'></Typography>
     <Typography color={'gray'}>Privaicy policy</Typography>
     <Typography color={'gray'}>Disclimer</Typography>
     <Typography color={'gray'}>Caution notes</Typography>



   </Grid>
   <Grid item md={2}   color="Black">
     <Typography marked="left" variant='h6' >Quick links</Typography>
     <Typography color={'gray'} marginTop='20px' sx={{display: 'flex',flexDirection: 'column'}} >
    <Link href='/' sx={{textDecoration:'none',color:'gray' }}>Home</Link>
    <Link href='/menu' sx={{textDecoration:'none',color:'gray' }}>Menu</Link>
     <Link href='/about' sx={{textDecoration:'none',color:'gray' }}>About</Link>
     <Link href='/login' sx={{textDecoration:'none',color:'gray' }}>Login</Link></Typography>
   </Grid>
   <Grid item md={3}   color="Black">
     <Typography marked="left" variant='h6' >Contact info</Typography>
     <Typography color={'gray'} marginTop='20px'><LocationOnIcon/><Link sx={{textDecoration:'none',color:'gray' }} href='https://www.google.com/maps/place/Sadalga,+Karnataka/@16.5525577,74.5249629,15z/data=!3m1!4b1!4m5!3m4!1s0x3bc0e65a54736dd1:0xd272356298dc9441!8m2!3d16.5533172!4d74.5316807'>Sadalga post,Chikodi tq,Belgavi dist,Karnataka,India 591239</Link></Typography>
     <Typography color={'gray'} marginTop='20px'><CallIcon/><Link sx={{textDecoration:'none',color:'gray' }}>+91 8660216900</Link></Typography>
     <Typography color={'gray'} marginTop='20px'><EmailIcon/><Link sx={{textDecoration:'none',color:'gray' }} href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbgsbNHKCVZskhprcRHNhsmWLxhGKFrfCNZRKqFjmXqSvzdqgMKLljFmtFrmjqMMtwTnGX'>rohithukkeri19@gmail.com</Link></Typography>
   </Grid>
 </Grid>
 </Container>
 <Box margin='0px 30px'>
   <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
     </Box>
     </Box>
</StyledFooter>
  )
}

export default Footer