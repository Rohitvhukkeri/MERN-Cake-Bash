import React from 'react'
import { Container, Stack, styled, Typography, StyledTypography, Box, Paper } from '@mui/material';
export const RoundCard = styled(Box)(({ theme }) => ({
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


export const StyledName = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontSize: 20,
  });


export const CardBox = styled(Box)({
    dispaly: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });

  export const StyledFooter= styled(Paper)(({
    height: 'auto',
    backgroundImage: `linear-gradient(rgba(236,236,236,1),rgba(37,41,88,0.5))`,
    color: 'white',
    marginTop: '60px',
  
}))

export const MaxContainer = styled(Container)({
  padding: "0px"
});

  
