import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { NavLink } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

function AdminDashboard() {
  const data = useContext(GlobalContext);
  const [products] = data.productApi.products;
  const [allUsers] = data.authApi.allUsers;



  return (
    <Container sx={{ paddingTop: "10px",  }}>
      <Typography variant="h3"  align="center" sx={{ paddingTop: 3 ,color:'gray'}}>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
        <Grid item lg={4} md={6} xs={12}  align="center">
          <Card sx={{backgroundColor:'#00203FFF',height:'300px',borderRadius:'100%',width:'300px'}}>
            <Card  sx={{mt:'45px',backgroundColor:'#ADEFD1FF'}}>
            <CardHeader title="Total Products"  />
            <CardContent>
              <Typography variant="h3">{products.length}</Typography>
            </CardContent>
            <CardActions sx={{display: 'felx', justifyContent: 'center'}}>
              <Button
                variant="contained"
                sx={{
                 
                  backgroundColor: "#f4474a",
                  ":hover": { backgroundColor: "#25CE36" },
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/product/create`}
                >
                  Add Product
                </NavLink>
              </Button>
            </CardActions>
            </Card>
          </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}  align="center">
          <Card sx={{backgroundColor:'#606060FF',height:'300px',borderRadius:'100%',width:'300px'}}>
            <Card sx={{mt:'45px',backgroundColor:'#C7D3D4FF'}}>
            <CardHeader title="All Users" />
            <CardContent>
              <Typography variant="h3">{allUsers.length}</Typography>
            </CardContent>
            <CardActions sx={{display: 'felx', justifyContent: 'center'}}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f4474a",
                  ":hover": { backgroundColor: "#25CE36" },
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/admin/allUsers`}
                >
                  View
                </NavLink>
              </Button>
            </CardActions>
          </Card>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminDashboard;