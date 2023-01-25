// import * as React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Button } from "@mui/material";
import { Rating } from "@mui/material";

const AnotherCard = (props) => {
  return (
    <Card style={{ border: "none", boxShadow: "none" }}>
      <div className="borderContent">
        <IconButton aria-label="add to favorites" color="primary">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <span className="textIcon">
          <b>Aggiungi alla lista dei desideri</b>
        </span>

        <div className="applyEffect">
          <CardMedia className="effectImg" component="img" src={props.image} />
        </div>
      </div>

      <CardContent>
        <p className="textCard">
          <b>{props.nameItem}</b>
        </p>
        <Rating defaultValue={3.0} />
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            color: "black",
          }}
        >
          <b>{props.price}</b>
          {/* <span style={{textDecoration:'line-through', color:'black'}}>{props.price}</span> 174,99€ */}
        </Typography>
      </CardContent>

      <CardActions style={{ justifyContent: "center" }}>
        <Button
          className="btn-add"
          sx={{
            width: "100%",
            backgroundColor: "orange",
            color: "black",
            border: " 1px solid orange",
          }}
        >
          Aggiungi al carrello
        </Button>
      </CardActions>
    </Card>
  );
};

export default AnotherCard;
