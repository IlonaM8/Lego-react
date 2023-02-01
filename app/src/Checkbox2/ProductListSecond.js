import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState }  from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box } from "@mui/system";
import  BasicPagination  from '../Products/pagination';


const ProductListSecond = ({products}) => {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [hidePagination, setHidePagination] = useState(false);

  //for pagination
    useEffect(() => {
        setDisplayedProducts(products);
      }, [products]);

//   const { products } = props;
    return (
        <>
        <Box sx={{maxWidth: 1110 }} p={4} onClick={() => setHidePagination(!hidePagination)}>
        <Grid container  columns={{ xs: 6, sm: 8, md: 12, lg: 12}} >
            {displayedProducts.map(({ id, title, category, image, price }) => (
                <Grid item flex xs={6} sm={6} md={6} lg={4} xl={4}>
                    <Card key={id} sx={{ height: 460, padding: 3}}>
                        <IconButton aria-label="add to favorites" color="primary">
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <span className="textIcon">
                                <b>Aggiungi alla lista dei desideri</b>
                        </span>
                    <div className="applyEffect">
                        <CardMedia
                        lassName="effectImg"
                        component="img"
                        height="194"
                        src={image}
                        />
                    </div>

                    <CardContent>
                    <p className="textCard">
                        <b>{title}</b>
                    </p>
                    <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{
                                color: "black",
                            }}
                            >
                            <b>{price}</b>
                    </Typography>
                    {/* <p>{category}</p> */}
                    </CardContent>
                    <CardActions>
                        <Button
                        className="btn-add"
                        sx={{
                            width: "100%",
                            backgroundColor: "orange",
                            color: "black",
                        }}
                        >
                        Aggiungi al carrello
                        </Button>
                    </CardActions>
                </Card>
          </Grid>
            ))}
 </Grid>
 </Box>
 {!hidePagination && <BasicPagination setProducts={setDisplayedProducts} />}

 </>
    );



};

export default ProductListSecond;
