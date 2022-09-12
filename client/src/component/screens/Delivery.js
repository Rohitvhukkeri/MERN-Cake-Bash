import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Delivery() {
  return (
    <>
     <Typography variant='h3' color='gray' sx={{display:'flex',justifyContent:'center',fontFamily: 'Kaushan Script, cursive',mt:5}}>Thank You For Your Order</Typography>
    <Box sx={{display:'flex',justifyContent:'center',mt: 1}}>
    <img src="https://res.cloudinary.com/foodiescom/image/upload/v1662636008/Animation/497-truck-delivery-lineal_crri14.gif" alt="" srcset="" />
    </Box>
   

    </>
  )
}

export default Delivery