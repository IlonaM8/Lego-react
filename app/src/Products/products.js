import { Button, CardActions } from "@mui/material";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import style from "./style.css";

const ListCard = (props) => {
  return (
    <Card style={{ border: "none", boxShadow: "none" }}>
      <div className="borderContent">
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
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            color: "black",
          }}
        >
          <b>{props.price}</b>
        </Typography>
      </CardContent>

      <CardActions style={{ justifyContent: "center" }}>
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
  );
};

export default ListCard;
