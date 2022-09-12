import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./../../GlobalContext";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  CardHeader,
  Button,
  Rating,
  CardMedia,
} from "@mui/material";
// import GradeSharpIcon from "@mui/icons-material/GradeSharp";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

function ProductDetails() {
  const data = useContext(GlobalContext);
  const [isAdmin] = data.authApi.isAdmin;
  const params = useParams();
  const [product, setProduct] = useState("");
  const [itemCount, setItemCount] = useState(0);
  const addToCart = data.authApi.addToCart;

  const getSingle = async (id) => {
    let res = await axios.get(`/api/v1/product/get/${id}`);
    setProduct(res.data.product);
  };

  useEffect(() => {
    getSingle(params.id);
  }, []);

  const incItemCount = () => {
    setItemCount(itemCount + 1);
  };
  const decItemCount = () => {
    if(itemCount <= 0) {
      return;
    } else {
      setItemCount(itemCount -1)
    }
    setItemCount(itemCount - 1);
  };
  return (
    <Container>
      <Typography variant="h4" margin='45px 0px' sx={{display:'flex',justifyContent:'center'}}>Product details</Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          sm={12}
          sx={{ paddingY: 3 }}
          textAlign="center"
        >
          <Card elevation={10} >
            <CardMedia
              sx={{ height: "335px" }}
              image={!product ? null : product.image.url}
            >
            </CardMedia>
            
            {/* <Rating
                sx={{ py: 2 }}
                name="read-only"
                readOnly
                defaultValue={5}
                max={5}
              /> */}
            
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{backgroundColor:'lightcyan'}} elevation={8}>
            <CardHeader sx={{ textAlign: "center" }} title={product.title} />
            <CardContent>
              <div style={{ display: "flex" }}>
                <Typography color="black" variant="h4">
                  {" "}
                  &#8377;{product.price}
                </Typography>
                <del style={{ marginLeft: "10px", color: "red" }}>
                  &#8377;{product.price + product.price * (10 / 100)}
                </del>
                <span>(inclusive GST)</span>
              </div>

              <div>
                <Typography sx={{ pt: 3 }}>
                  {" "}
                  {
                    product.stock <1 ? <strong style={{color:"red"}}> Out of Stock</strong> :<strong style={{color:"green"}}>Stock</strong>
                  }
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button variant="contained" sx={{ backgroundColor: "gray" }}
                 
                  hidden={product.stock < 1 ? true: false}>
                  
                    
                    {product.stock }
                  </Button>

                  {isAdmin ? null : (
                    <div>
                      {/* <IconButton color="error" onClick={decItemCount}>
                        <RemoveIcon />
                      </IconButton>
                      <strong
                        style={{ paddingLeft: "5px", paddingRight: "5px" }}
                      >
                        {itemCount}
                      </strong>
                      <IconButton color="success" onClick={incItemCount}>
                        <AddIcon />
                      </IconButton> */}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ paddingBottom: "30px" }}>
                <Typography sx={{ pt: 3 }}>
                  <strong> Description </strong>
                </Typography>
                <Typography variant="p"> {product.desc} </Typography>
              </div>

              <div>
                {isAdmin ? null : (
                  <Button
                  disabled={product.stock < 1 ? true: false}
                    onClick={() => addToCart(product)}
                    variant="contained"
                    color="success"
                    fullWidth
                  >
                    {" "}
                    Add to Cart{" "}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container >
  );
}

export default ProductDetails;
