import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarOutlineIcon from '@mui/icons-material/StarOutline';



const noImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNGGjrfSqqv8UjL18xS4YypbK-q7po_8oVQ&usqp=CAU";

function Product(props) {
    const {
        _id,
        title,
        price,
        image,
        desc,
        stock,
        quantity,
        rating,
        isAdmin,
        isUser,
        del,
        qnty
    } = props;

    return (
        <React.Fragment>
            
            {/* {
                stock === 0 ? null : ( */}
                    <Grid item xs={12} sm={6} md={4} lg={4} >
                        <Card elevation={8} sx={{height:'60vh'}} >
                            <NavLink 
                                to={`/product/details/${_id}`}
                                style={{ textDecoration: "none" }}
                            >
                                {/* <Badge badgeContent={ <StarOutlineIcon/> } color="warning" sx={{ position: "absolute" }}></Badge> */}
                                <CardMedia
                                    component="img"
                                    alt="No image Found"
                                    height="180"
                                    image={image.url ? (image.url) : ({ noImage })}
                                >
                                </CardMedia>
                            </NavLink>
                            <CardContent>
                                <Typography sx={{display:'flex',justifyContent:'center'}}  variant="h5" component="div" >
                                    {title}
                                </Typography>
                               
                                
                            </CardContent>
                            <CardActions sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <Box component="div" px={1}>
                                {/* <Typography gutterBottom variant="body1" component="div" >
                                   
                                </Typography> */}
                                
                                  
                                { isUser ? (
                                    <Typography sx={{color: 'gray'}} gutterBottom variant="body1" component="div" mb={2}>
                                    {desc}
                                    </Typography>
                                ):null}
                                   
                                </Box>
                                </CardActions> 
                                <Box sx={{display:'flex',justifyContent:'space-between'}}   my={2} mt={1}>
                                    <Card elevation={10}><strong>MRP: &#8377;{price}</strong></Card>
                                    <Card elevation={10}><strong>Qnt: {qnty}</strong></Card> 
                                </Box>
                                <Box component="div">
                                    {isAdmin ? (
                                        <Box component="div" sx={{
                                            display: "flex", justifyContent: "space-between"
                                        }} >
                                            <IconButton variant="outlined" color="secondary" sx={{ marginX: "0px"}} >
                                                <NavLink
                                                    to={`/product/update/${_id}`}
                                                    style={{ textDecoration: "none", color: "blue" }}
                                                >
                                                    <EditIcon />
                                                </NavLink>
                                            </IconButton>
                                            <IconButton variant="outlined" color="warning" sx={{ marginX: "8px" }} onClick={() => del(_id)} >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    ) : null}
                                </Box>
                            
                        </Card>

                    </Grid> 
                {/* )
            } */}
            
        </React.Fragment >
    );
}

export default Product;