import styled from '@emotion/styled'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'



export const BackgroundPaper=styled(Paper)(({
  height: '35vh',
  backgroundImage: `linear-gradient(rgba(132,140,207,0.8),rgba(37,41,88,0.8)),url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661373911/profile/bg12_av6zwn.jpg`})`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  //marginTop: '1px'
}))

export const Card= styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundRepeat: "no-repeat",
  backgroundPosition: 'center',
  backgroundSize: "cover",
  borderRadius: '100%',
  overflow: 'hidden',
  width: '100px',
  cursor: 'pointer',
  [theme.breakpoints.up("md")]: {
    height: 100,
  },
  [theme.breakpoints.down("md")]: {
    height: 100,
  },
  "&:hover": {
    opacity: 0.8,
    boxSizing: "borderBox",
    zIndex: 1,
    transition: `all 0.45s ease`,

  },
}));
export const StyleGrid= styled(Grid)(({
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'


}))

export const CommonHeader=styled(Typography)(()=>({
  fontFamily:"Bai Jamjuree",
  fontWeight:"bold",
  fontSize:"2.5rem"
}));