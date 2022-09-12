import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import axios from 'axios'
import { Container } from '@mui/system';
import { Box,  Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


function OrderList() {
  const context = useContext(GlobalContext);
  const [token] = context.token
  const [userData] = context.authApi.userData

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      let res = await axios.get(`/api/v1/order/allOrders`, {
        headers: { Authorization: token }
      })
      setOrders(res.data.orders)
    }
    getOrders()
  }, [])


  if (orders.length === 0) {
    return (
      <>
        <Typography>Hi , {userData.name},No Orders</Typography>
      </>
    )
  }
  return (
    <Container>
      <Typography mt={3} mb={2} variant='h4' color='black' sx={{ display: 'flex', justifyContent: 'center' }}>My Orders</Typography>
      <Grid item xs={12} sm={12} md={6} lg={8}>
        <TableContainer component={Paper} elevation={8}>
          <Table sx={{ minWidth: 650, backgroundColor: 'lightcyan' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left"><Typography variant='h6' color='chocolate'>Order Id</Typography></TableCell>
                <TableCell align="left"><Typography variant='h6' color='chocolate'>Date</Typography></TableCell>
                <TableCell align="left"><Typography variant='h6' color='chocolate'>P.Mode</Typography></TableCell>
                <TableCell align="left"><Typography variant='h6' color='chocolate'>Status</Typography></TableCell>
                <TableCell align="left"><Typography variant='h6' color='chocolate'>Cart</Typography></TableCell>
                <TableCell align="left"><Typography variant='h6' color='chocolate'>Total</Typography></TableCell>
                <TableCell align="left"><Typography variant='h6' color='chocolate'>Pay status</Typography></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {
                orders && orders.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        {item.orderId}
                      </TableCell>
                      <TableCell>
                        {new Date(item.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {item.paymentMode}
                      </TableCell>
                              
                      <TableCell>
                        {item.orderStatus}
                      </TableCell>
                      <TableCell>
                        <details>
                          <summary>Cart</summary>
                          {

                            <TableRow>
                              <TableRow>
                                {
                                  item.cart.map((item, index) => {
                                    return (
                                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} key={index}>
                                        <img src={item.image.url} height='150vh' width='150px' />
                                      </Box>
                                    )
                                  })
                                }
                              </TableRow>

                              <TableRow>
                                <TableCell>Address:
                                  {item.address}
                                </TableCell>
                              </TableRow>

                             

                              <TableRow>
                                <TableCell>PaymentID:
                                  {item.paymentId}
                                </TableCell>
                              </TableRow>

                              <TableRow >
                                <TableCell>UserId:
                                  {item.userId}
                                </TableCell>
                              </TableRow>

                              {/* <TableRow>
                                <TableCell>CreatedDate:
                                  {item.createdAt}
                                </TableCell>
                              </TableRow> */}

                            </TableRow>
                          }
                        </details>
                      </TableCell>
                      <TableCell>
                        &#8377;{item.finalTotal}
                      </TableCell>
                      <TableCell>
                        {item.paymentStatus}
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  )
}

export default OrderList