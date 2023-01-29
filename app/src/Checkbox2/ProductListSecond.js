import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import React  from "react";
// import ProductSecond from "./ProductSecond";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box } from "@mui/system";
import BasicPagination from "../Products/pagination";

const ProductListSecond = props => {
    // const [products, setProducts] = useState([]);
  const { products } = props;
    return (
        <>
        <Box sx={{maxWidth: 1110 }} p={4}>
        <Grid container  columns={{ xs: 12, sm: 8, md: 12, lg: 12}} >
            {products.map(({ id, title, category, image, price }) => (
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
                    <p>{category}</p>
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
 {/* <BasicPagination setProducts={(p) => setProducts(p)} /> */}
 </>
    );



};

export default ProductListSecond;
