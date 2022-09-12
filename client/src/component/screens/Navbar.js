import React, { useState, useContext } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  MenuItem,
  Menu,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
  Avatar,
} from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { styled } from "@mui/material/styles";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { GlobalContext } from './../../GlobalContext';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

const pages = ["Home","About","Menu"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const drawerWidth = 300;

function Navbar() {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isLogged,setIsLogged] = context.authApi.isLogged;
  const [isAdmin,setIsAdmin] = context.authApi.isAdmin;
  const [isUser,setIsUser] = context.authApi.isUser;
  const [cart] =context.authApi.cart;
  const [user] = context.authApi.userData;
  const [anchorNav, setAnchorNav] = useState(null);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* login and signup handler*/
  // const handleOpenMenu = (event) => {
  //   setAnchorNav(event.currentTarget);
  // };

  // const handleCloseMenu = () => {
  //   setAnchorNav(null);
  // };


  const logoutUser = async () => {
    if(window.confirm(`Are u sure to logout`)){
      await axios.get('/api/v1/auth/logout');
    localStorage.clear();
    if(isAdmin){
      setIsAdmin(false);
    }
    if(isUser){
      setIsUser(false);
    }
    setIsLogged(false);
    toast.success("logout success")
    navigate('/');
    window.location.reload();
    }else {
      toast.warning("logout terminated")
    }
  }

  
  /* common route */
  const commonRoute = () =>{
    return (
      <Box>
        <IconButton
          sx={{ fontSize: 25, mr: 0.5 }}
          id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleClick}
        >
          <Avatar src={user.image.url}  sx={{color: 'white', fontSize: '2rem'}}/>
        </IconButton>
      <Menu id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
            >
              <MenuItem onClick={handleClose}>
                {/* <Typography component={Link} to={`/orders`} color="black" sx={{ textDecoration: "none" }}>
                  Orders
                </Typography> */}
                {
                  isUser ? <NavLink style={{ textDecoration: "none",color: 'black'  }} to={`/Orders`}>Order</NavLink> : <NavLink style={{ textDecoration: "none",color: 'black' }} to={`/admin/allOrders`}>Order</NavLink>
                }
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography component={Link} to={`/profile`} color="black" sx={{ textDecoration: "none" }}>
                  Profile
                </Typography>
              </MenuItem>
              
                {
                  isAdmin ? <MenuItem onClick={handleClose}><NavLink style={{ textDecoration: "none",color: 'black' }} to={`/admin/dashboard`}>Admin dashboard</NavLink></MenuItem> : null
                } 
              
              <Divider/>
              <MenuItem onClick={handleClose}>
                <Typography onClick={logoutUser} color="red" sx={{ textDecoration: "none" }}>
                  Logout
                </Typography>
              </MenuItem>

      </Menu>
      </Box>
    )
  }

  return (
    
    <React.Fragment>
      <AppBar position="sticky" sx={{ backgroundColor: "rgba(10,10,10,0.9)" }}>
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <RestaurantIcon  fontSize="lg" sx={{color:"orange"}} />
            </IconButton>
          </Box>

          <Box sx={{flexGrow: 1,display: "flex",justifyContent: { xs: "center", md: "flex-start" }}}>
            <Typography component={Link} to={`/`} variant="h5" sx={{ textDecoration: "none", color: "orange",fontFamily:'Oleo Script Swash Caps,cursive' }}>
            {isAdmin ? "Admin" : "Cake-Bash"}
            </Typography>

            
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            <Button component={Link} to={`/home`} color="inherit" sx={{ m: 2,fontFamily:'Kaushan Script,cursive' }}>
              Home
            </Button>
            <Button component={Link} to={`/about`} color="inherit" sx={{ m: 2,fontFamily:'Kaushan Script,cursive' }}>
              About
            </Button>

            <Button component={Link} to={`/Menu`} color="inherit" sx={{ m: 2,fontFamily:'Kaushan Script,cursive' }}>
              Menu
            </Button> 
          </Box>
              {
          isLogged ? commonRoute() : (
            
            <Box>
              <IconButton
              sx={{ fontSize: 25, mr: 0.5 }}
            id="basic-button"
            aria-controls={openMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
            onClick={handleClick}
          >
            <Avatar sx={{color: 'white'}}/>
          </IconButton>
          <Menu id="basic-menu"
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
          >
            <MenuItem onClick={handleClose}>
              <Typography component={Link} to={`/login`} color="black" sx={{ textDecoration: "none" }}>
                Login
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography component={Link} to={`/register`} color="black" sx={{ textDecoration: "none" }}>
                Register
              </Typography>
            </MenuItem></Menu>
            </Box>
          )
        }

          <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "secondary" }}/>

         
            {
              isUser ?
              <Box>
            
            <IconButton component={Link} to={'/product/cart'} sx={{ color: "white", ml: 0.5 }}>
            <Badge color="warning" badgeContent={cart.length > 0 ? cart.length : 0}>
              <ShoppingCartSharpIcon  sx={{ fontSize: 25 }}/>
              </Badge>
            </IconButton> 
          </Box> : null 
          }

        </Toolbar>
      </AppBar>

      {/* Drawer component */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        onClose={() => {
          handleDrawerClose();
        }}
        open={open}
      >
        <DrawerHeader sx={{backgroundColor:'orange'}}>
          <Typography sx={{ flexGrow: 1,fontFamily:'Oleo Script Swash Caps,cursive'}}>Cake-Bash</Typography>
          <IconButton onClick={handleDrawerClose}>
            <CloseSharpIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List  >
          {pages.map((link, index) => {
            return (
              <ListItem  onClick={handleDrawerClose}  button component={Link} to={`/${link}`} key={index}>
                <ListItemText on primary={link} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbar;
