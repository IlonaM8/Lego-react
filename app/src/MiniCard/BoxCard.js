import { Button, CardActions} from "@mui/material";
import {Card, CardMedia, CardContent, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './style.css'

const BoxCard = (props) => {
    return (

        <Card>
            <CardMedia
             component="img"
             src={props.image}
             />
            <CardContent>
                <h2>{props.upperText}</h2>
                <p>{props.centerText}</p>
                <CardActions
                style={{
                    justifyContent: 'center'
                }}>
                    <Button
                    variant="text"
                    size="medium"
                    color="secondary"
                    endIcon={<ArrowForwardIosIcon/>}>
                        {props.bottomText}
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
//
// <Box width='320px'>
//    <Card>
//        <CardContent>
//         <img src={props.topImg}/>
//             <Typography  sx={{fontSize:16}}>
//                 <strong>{props.upperText}</strong>
//             </Typography>
//             <Typography sx={{fontSize:13}}>
//                {props.MainText}
//             </Typography>
//             <a href=""><strong>{props.alink}</strong></a>
//        </CardContent>
//    </Card>
// </Box>
//

// const BoxCard = (props) => {
//     return(
//         <div className="section2__box-1">
//         <a href="#" className="section2__img-text-link">
//           <div className="section2__second-img">
//             <img src={props.image} className="section2__firstimg"/>
//          </div>
//             <div className="section2__box-text ">
//                 <article className="section2__text a-cardStyles__title-text">
//                     {props.upperText}
//                 </article>
//                     <p className="section2__text-link a-cardStyles__description-text">
//                       {props.centerText}
//                     </p>
//                     <p className="section2__link-one a-cardStyles__description-text">{props.bottomText}</p>
//             </div>
//         </a>
//         </div>
//     )
// }

export default BoxCard

