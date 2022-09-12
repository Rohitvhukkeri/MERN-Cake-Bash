import React from 'react'
//import banner1 from '../../assets/images/cake/'
//import Menu from '../menu/Menu'
import { Container,Box, Grid, styled, Typography,Paper, Stack } from '@mui/material'
import {StyledCard,StyledTypography,StyledWrapper} from '../../style/menu'
import {RoundCard,StyledName,CardBox, MaxContainer} from '../../style/home'
import { Avatar, Link, List, ListItem} from '@mui/material'
import {CardActionArea, CardMedia,CardContent} from '@mui/material'
import { CardRound, GridStyle } from '../../style/menu'
import Footer from './Footer'


function Home() {
  return (
    <Stack>
    <MaxContainer maxWidth='xl' style={{paddingLeft:"0px",paddingRight:"0px"}}> 
      <Box component="div"
      sx={{backgroundImage: `linear-gradient(rgba(149,165,166,0.2),rgba(36,37,42,0.8)),url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661338990/profile/banner_v1xfmx.jpg`}) `,
      width: "100%",
      height: "80vh",
      backgroundPosition: "center",
     backgroundSize: "cover",
     backgroundRepeat:"no-repeat"
    }}
      >
      </Box>
     
      <Container>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2} mt={1}>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661338987/profile/donut8_ltgajd.jpg`})`}}>
            <StyledWrapper>
              <StyledTypography>
                Donut
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661338987/profile/cake199_xxoob5.jpg`})` }}
          >
            <StyledWrapper>
              <StyledTypography>
                Cake
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661339744/profile/cup133_egvw0a.jpg`})` }}>
            <StyledWrapper>
              <StyledTypography>
                Cup cake
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661338990/profile/cake18_qocy5r.jpg`})` }}>
            <StyledWrapper>
              <StyledTypography>
                Dry cake
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
    
    <Stack container direction={"row"} mt={4} spacing={1} ml={3}
      sx={{ overflow: "auto" }} marginTop='50px'>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661340513/profile/standcake_gkssqe.jpg`})` }} />
          <StyledName>Cake</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661339986/profile/dessert1_qrbtbe.jpg`})` }} />
          <StyledName>Dessert</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661339995/profile/birthday_mfdyqu.jpg`})` }} />
          <StyledName>Birthday</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661340288/profile/donut4_mk1e0v.jpg`})` }} />
          <StyledName>Donut</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661340072/profile/cake30_pavoi5.jpg`})` }} />
          <StyledName>Choclate</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661340189/profile/cup5_pcqstf.jpg`})` }} />
          <StyledName>Cup</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${`https://res.cloudinary.com/foodiescom/image/upload/v1661340118/profile/cake25_tewvju.jpg`})` }} />
          <StyledName>Fruit</StyledName>
        </Container>
      </CardBox>
    </Stack>
    </Container>
   <Grid backgroundColor='orange' container display='flex' direction={"row"} columnSpacing={2} rowSpacing={2} marginTop='20px'>
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
              
            </GridStyle>
            </Grid>
            <Footer/>
    </MaxContainer>
    </Stack>
  )
}

export default Home