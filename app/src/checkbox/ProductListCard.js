import { Box, Button, Card, CardActions, CardContent,CardMedia, Checkbox, FormControlLabel, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Data, tipiProdotto } from './Data';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// import BasicPagination from "../Products/pagination";


const ProductListCard = (props) => {
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    // const [List, setProducts] = React.useState([]); //for pagination?

    //initialize the state for checkboxes
    const [statusCheck, setStatusCheck] = React.useState([false, false, false, false, false]);


    //function to handle when checkbox is clicked
    const handleChange = (event, index) => {
        //create a copy of the current checbox state
        const newValues = [...statusCheck];
        //update the corrisponding checkbox value in the state
        newValues[index] = event.target.checked;
        setStatusCheck(newValues);
        //call the function to handle the filter
        handleFilters(newValues, selectedCategory);
        console.log(newValues)
    };

    //function to handle the filter
    const handleFilters = (newValues, selectedCategory) => {

        let filteredData = Data;
        if(selectedCategory !== "All"){
            //filter the data based on the selected checkoxses and category
            filteredData = Data.filter((item) => {
                //check if the item matches any of the selected checkboxes and category
                return (newValues.some((newValue, index) => {
                    return newValue && item.type === tipiProdotto[index].name;
                }) && item.category === selectedCategory);
            });
        } else {
            filteredData = Data.filter((item) => {
                //check if the item matches any of the selected checkboxes
                return (newValues.some((newValue, index) => {
                    return newValue && item.type === tipiProdotto[index].name;
                }));
            });
        }

     //update the state or call a callback function to update the parent components
       props.setFilteredData(filteredData);

    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    React.useEffect(() => {
        handleFilters(statusCheck);
    }, [selectedCategory, statusCheck])





    return (
        <div>
            <Box>
            <Typography>Tipo Di Prodotto weeee</Typography>
                <Box sx={{display: "flex", flexDirection: "column", padding: 5}}>
                    {tipiProdotto.map((product, index) => (
                        <FormControlLabel
                        key={product.id}
                        value={selectedCategory}
                        control={<Checkbox checked={statusCheck[index]}  onChange={(event) => handleChange(event,index)}/>}
                        label={product.name}
                        labelPlacement="end"
                    />
                    ))}
                </Box>
            </Box>
            <Box>
                <Box p={5}>
                    <div>
                        <Grid
                        container>
                        {props.filteredData.map((item) => {
                            return (
                                <Grid item flex xs={6} sm={6} md={6} lg={4} xl={4}>
                            <Card key={item.id} sx={{ maxWidth: 345 }}>
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
                                src={item.image}
                                />
                            </div>

                            <CardContent>
                            <p className="textCard">
                              <b>{item.nameItem}</b>
                             </p>
                            <Typography
                                    variant="body2"
                                    color="text.primary"
                                    sx={{
                                      color: "black",
                                    }}
                                    >
                                   <b>{item.price}</b>
                             </Typography>
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
                    )})}
                </Grid>
                    </div>
               </Box>
               {/* <BasicPagination setProducts={(p) => setProducts(p)} /> */}
            </Box>
      </div>
    );
  }


  export default ProductListCard;
