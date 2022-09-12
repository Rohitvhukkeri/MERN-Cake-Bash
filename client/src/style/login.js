import React from "react";
import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  Paper
} from "@mui/material";

export const StyledPaper = styled(Box)({
  height: "100vh",
  backgroundImage: `linear-gradient(rgba(15,23,43,0.9),rgba(15,23,43,0.9)),url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661338989/profile/lock2_esbude.png`})`,
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
 
});


export const PaperStyle = styled(Paper)(()=>({
  padding: '20',
    height: '65vh',
    width: '300px',
    marginTop: '140px'
})) ;