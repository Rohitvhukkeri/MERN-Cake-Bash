import React, { useContext,useEffect,useState } from 'react'
import { Grid, Typography, Container, Button, Chip, Tab, Box, Tabs, Stack} from '@mui/material';
import Footer from './Footer';
import { toast } from 'react-toastify';
import axios from 'axios';
import Product from '../Product/Product';
import { GlobalContext } from './../../GlobalContext';
import {StyledCard,StyledWrapper,StyledTypography} from '../../style/menu'


function Menu() {

  const data = useContext(GlobalContext)
  const [products, setProducts] = data.productApi.products;
  const [isUser] = data.authApi.isUser;
  const [isAdmin] = data.authApi.isAdmin;
  const [token] = data.token;

  const [curItems, setCurItems] = useState([]);

  const filterResult = (catItem) => {
    // console.log('cate item =', catItem)

    if (catItem === "All") {
      setCurItems(products);
    } else {
      let result = products.filter((curData) => {
        return curData.category === catItem;
      });
    // console.log("filtered result =", result);
      setCurItems(result);
    }
  };

  useEffect(() => {
    filterResult("All");
  }, [products]);

  const delHandler = async (id) => {
    if (window.confirm(`Are you sure to delete product?`)) {
      try {
        let product = await axios.get(`/api/v1/product/get/${id}`)
        if (!product) {
          toast.error('no product found')
        } else {
            // delete image
          axios.post(`/api/v1/image/product/destroy`, { public_id: product.public_id }, {
              headers: {Authorization: token}
           })
           await axios.delete(`/api/v1/product/delete/${id}`, {
              headers: {Authorization: token}
           })
            .then(res => {
              toast.success("Product deleted succssfully");
              window.location.reload();
          }).catch(err => toast.error(err.message))
        }

        } catch (err) {
          toast.error(err.message)
        }
    } else {
      toast.warning('delete terminated')
    }
  }

  return (
    <>
      <Container>
        <Typography mt={2} variant='h5' color='orangered' sx={{fontFamily:'Oleo Script Swash Caps,cursive',display:'flex',justifyContent:'center'}}>Pre Order</Typography>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2} mt={1}>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661368583/profile/sepecial1_txl4fj.jpg`})`}}>
            <StyledWrapper>
              <StyledTypography >
                Anniversary
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661368126/profile/cake40_g6xvni.jpg`})` }}
          >
            <StyledWrapper>
              <StyledTypography>
                Birhday
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661368134/profile/cake48_jg06cm.jpg`})` }}>
            <StyledWrapper>
              <StyledTypography>
                Fruit
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661368494/profile/special_aprfkq.jpg`})` }}>
            <StyledWrapper>
              <StyledTypography>
               Wedding
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
      </Container>

      <Typography variant='h4' sx={{display:'flex',justifyContent:'center', color:'orangered',marginTop:'65px',fontFamily:'Oleo Script Swash Caps,cursive'}}>A ready-to-eat slice of heaven.</Typography>
      <Container sx={{py:10}}>
      <Grid container>
        {/* xs Filter */}
        <Grid item xs={12} sx={{padding:3}}>
        <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Tabs              
              indicatorColor="secondary" variant="scrollable" scrollButtons allowScrollButtonsMobile                       
            >
              <Tab sx={{padding: 0.5}} onClick={() => filterResult("All")}          
                label={
                  <>
                    <Chip
                      label="All" variant="outlined"
                      sx={{color:'green',
                        "&:hover": {
                          background: "orange",
                          color: "black",
                        },
                        fontWeight: "bold", 
                      }}
                    />
                  </>
                }
                
              />
              <Tab  sx={{padding: 0.5}} onClick={() => filterResult("Cake")}
                label={
                  <>
                    <Chip
                      label="Cake" variant="outlined"
                      sx={{ color:'red',
                        "&:hover": {
                          background: "orange",
                          color: "black",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </>
                }
              />
              <Tab  sx={{padding: 0.5}} onClick={() => filterResult("Donut Cake")}
                label={
                  <>
                    <Chip
                      label="Donut Cake" variant="outlined"
                      sx={{ color:'red',
                        "&:hover": {
                          background: "orange",
                          color: "black",
                        },
                        fontWeight: "bold",                        
                      }}
                    />
                  </>
                }
              />
              <Tab  sx={{padding: 0.5}} onClick={() => filterResult("Cup Cake")}
                label={
                  <>
                    <Chip
                      label="Cup Cake" variant="outlined"
                      sx={{ color:'red',
                        "&:hover": {
                          background: "orange",
                          color: "black",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </>
                }
              />
            </Tabs>
          </Box>
        </Grid>
        {/* <Divider orientation="vertical" flexItem color="black" ></Divider> */}
        <Grid container spacing={3}>        
              {
                curItems && curItems.map((item,index)=>{
                  return(
                      <Product key={index} {...item} isUser={isUser} isAdmin={isAdmin} del={delHandler} />
                  )
                })
              }
        </Grid>
      </Grid>
    </Container>

    <Footer/>
    </>
  )
}

export default Menu