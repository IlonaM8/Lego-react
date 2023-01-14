// import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Button } from '@mui/material';
import {Rating} from '@mui/material';

const AnotherCard = (props) => {
// export default function BigCard() {

  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card>
      <div className='borderContent'>
        <IconButton aria-label="add to favorites" color="primary">
          <FavoriteBorderOutlinedIcon />
        </IconButton><span className='textIcon'><b>Aggiungi alla lista dei desideri</b></span>
        <div className='applyEffect'>
        <CardMedia className='effectImg'
        component="img"
        src={props.image}
        />
        </div>
      </div>

      <CardContent>
        {/* <Typography
        variant="h6"
        gutterBottom
        color="text.primary">
        </Typography> */}
        <p className='textCard'><b>{props.nameItem}</b></p>
        <Rating readOnly defaultValue={3.0}/>
        <Typography
        variant="body2"
        color="text.primary"
        sx={{
          color:'black',
        }}
        >
        {props.price}
        {/* <span style={{textDecoration:'line-through', color:'black'}}>{props.price}</span> 174,99€ */}
        </Typography>
      </CardContent>
      <CardActions
      style={{justifyContent: 'center'}}
      >
        <Button
        // variant="text"
        // size="small"
        // color="primary"
        sx={{
          width:'100%',
          backgroundColor: 'orange',
          color: 'black',
        }}>
          Aggiungi al carrello
        </Button>
      </CardActions>
    </Card>
  );
}

export default AnotherCard
