import { Button, CardActions } from "@mui/material";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./style.css";

const BoxCard = (props) => {
  return (
    <Card style={{ border: "none", boxShadow: "none" }}>
      <CardMedia component="img" src={props.image} />
      <CardContent>
        <h2>{props.upperText}</h2>
        <p>{props.centerText}</p>
        <CardActions
          style={{
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            size="medium"
            color="secondary"
            endIcon={<ArrowForwardIosIcon />}
          >
            {props.bottomText}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default BoxCard;
