import { Box } from "@mui/system";
import BoxCard from "./BoxCard";
import { Grid } from "@mui/material";
import styles from './style.css'

const Cards = [
    {
      id: 1,
      upperText: "Nuovo set Tour Eiffel LEGO®",
      centerText: "Costruisci un modello di uno dei monumenti più amati al mondo.",
      image:"https://www.lego.com/cdn/cs/set/assets/blt94c3ec1acbcd4ea0/10307-Exclusive-202211-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
      bottomText: "Compra ora",
    },
    {
      id: 2,
      upperText: "Nuovo set Natale nella strada principale LEGO®",
      centerText: "Costruisci una nuova aggiunta festosa alla collezione del villaggio invernale.",
      image:"https://www.lego.com/cdn/cs/set/assets/blt4f8691d4b8152499/10308-Exclusive-202210-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
      bottomText: "Compra ora",
    },
    {
      id: 3,
      upperText: "Notte stellata LEGO® Ideas",
      centerText: "Dai vita a un capolavoro come mai prima d'ora.",
      image:"https://www.lego.com/cdn/cs/set/assets/blt3d4818077a39a6fb/21333-Starry-Night-Exclusive-202205-Homepage-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
      bottomText: "Compra ora",
    },
    {
      id: 4,
      upperText: "Macchina del tempo Ritorno al futuro LEGO®",
      centerText: "Rivivi un classico del cinema con questo dettagliato set LEGO®.",
      image:"https://www.lego.com/cdn/cs/set/assets/blt4a16574a9ae63ac4/10300-Home-202204-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
      bottomText: "Compra ora",
    },
    {
      id: 5,
      upperText: "Torna alla Dunder Mifflin",
      centerText: "Ricrea i tuoi episodi preferiti con il nuovo set The Office LEGO® Ideas.",
      image:"https://www.lego.com/cdn/cs/set/assets/bltebdbdc12e818b14c/21336-T1-202210-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
      bottomText: "Compra ora",
    },
  ];

const BaseCard = () => {
    return(

      <Box p={3}
      style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
      <h2>Tendenze attuali</h2>
      <Grid
      container
      direction="row"
      flexWrap="nowrap"
      spacing={2}
      textAlign='center'
      style={{ overflowX:'scroll', scrollBehavior:'smooth'}}>
      {Cards.map((element) => {
        return (
          <Grid item
          //key?
          sx={{
            display: 'flex',
            flex: '0 0 100%',
          }}
          sm={6}
          md={4}
          lg={3}
          xl={3}

          style={{
            // padding: '20px',
            //boxShadow ?
            // transition: 'all 0.2s',
          }}
          >
            <BoxCard
            key={element.id}
            centerText={element.centerText}
            upperText={element.upperText}
            bottomText={element.bottomText}
            image={element.image}
            />
          </Grid>
          );
          })}
      </Grid>
      </Box>
    )


    //     <div className="section2__section2">
    //       <div className="section2__first-selection">
    //       <div className="section2__costruction">
    //           <h2 className="section2__costruction-text">Costruzioni in famiglia</h2>
    //      </div>
    //      <div className="section2__box-images">
    //         {Cards.map((element) => ( <BoxCard
    //         key={element.id}
    //         centerText={element.centerText}
    //         upperText={element.upperText}
    //         bottomText={element.bottomText}
    //         image={element.image} />))}
    //      </div>
    //      </div>
    //     </div>
    // )
}

export default BaseCard
