import { Button, CardActions } from "@mui/material";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ListCard = (props) => {


  return (
    <Card>
      <IconButton aria-label="add to favorites" color="primary">
        <FavoriteBorderOutlinedIcon />
      </IconButton>
      <span className="textIcon">
        <b>Aggiungi alla lista dei desideri</b>
      </span>

      <div className="applyEffect">
        <CardMedia className="effectImg" component="img" src={props.image} />
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
  );
};

export default ListCard;
