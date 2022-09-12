import styled from '@emotion/styled';
import { Box, Typography, Stack } from '@mui/material';
import React from 'react'
import Logo from './../../assets/images/img1.jpg'


const Banner = styled.div`
background:linear-gradient(rgba(0,0,0,0.5),rgba(255,255,255,0.5)),url(${Logo});
height:80vh;
background-repeat: no-repeat;
background-size: cover;
`;

const Style = () => {
  return (
    <>
    <Banner>
      
      <Box sx={{width:{xs:'100%',md:'500px'},textAlign:'center',paddingTop:'200px'}} >
        <Typography  color='white' variant='h4'>Food!!</Typography>
        <Typography color='white' variant='h2'>My Best Friend</Typography>
      </Box>
      
    </Banner>
    </>
  )
}

export default Style


// export const Image = styled(Box)(() => ({}))

// const Image = styled(Box)(() => ({}))

//cont theme = createTheme({})