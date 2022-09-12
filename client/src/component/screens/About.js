import React from 'react'
import { BackgroundPaper } from '../../style/about'
import { Box, Container } from '@mui/system'
import {CardActionArea, CardMedia, Grid, Typography,CardContent,ListItem,Link,List} from '@mui/material'
import { CardRound, GridStyle } from '../../style/menu'
import Footer from './Footer'



function About() {
  return (
    <>
   <BackgroundPaper>
    <Typography variant='h3' sx={{fontFamily:'Oleo Script Swash Caps,cursive'}}>About</Typography>
   </BackgroundPaper>
   <Container>
   <Grid container display='flex' direction={"row"} columnSpacing={2} rowSpacing={2} marginTop='20px' >
            <GridStyle item md={6} xs={12} lg={4}>
              <CardRound sx={{backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661340907/profile/covid3_xssg0l.jpg`})`}}/>
              <Typography textAlign='center' variant='h5' marginTop='10px' >Safe and Hygienic Packaging</Typography>
              <Box sx={{ display:'flex', justifyContent: 'center'}}>
              </Box>
            </GridStyle>
            <GridStyle item md={6} xs={12} lg={4}>
              <CardRound sx={{backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661340907/profile/covid2_l3vnyc.jpg`})`}}/>
              <Typography textAlign='center' variant='h5' marginTop='10px' >Delivery Partner Safety Checks</Typography>
              <Box sx={{ display:'flex', justifyContent: 'center'}}>
              </Box>
            </GridStyle>
            <GridStyle item md={6} xs={12} lg={4}>
              <CardRound sx={{backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661340907/profile/covid_oclae3.jpg`})`}}/>
              <Typography textAlign='center' variant='h5' marginTop='10px' >Contactless Delivery</Typography>
              <Box sx={{ display:'flex', justifyContent: 'center'}}>
              </Box>
            </GridStyle>
            </Grid>
            </Container>
           <Footer/>

  
  
   </>
  )
}

export default About