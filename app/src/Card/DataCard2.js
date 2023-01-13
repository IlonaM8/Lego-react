import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import styles from './style.css'
import AnotherCard from "./Card";

const first = [
    {
      nameItem: "Jazz Club",
      price: "229.99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt354cdb9826736318/10312.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Gandalf il Grigio e Balrog™",
      price: "19.99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt625e667e3b206d20/40631.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Aragorn™ e Arwen™",
      price: "19,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blta84e06d436db4688/40632.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Frodo™ e Gollum™",
      price: "14,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt66f9f99e366a124d/40630.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Narcisi",
      price: "12,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt5b0537aa2f0c1bce/40646.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Bouquet fiori selvatici",
      price: "59,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt474bb80770911c58/10313.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "LEGO® Minifigures - Serie 24",
      price: "3,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt354cdb9826736318/10312.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "TIE Bomber™",
      price: "64,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/bltd3b63280c2b9f8fc/75347.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "L'albero dei soldi",
      price: "24,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/bltd5f0302fe3c594ea/40648_alt1.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Battle Pack Clone Troopers™ Legione 501",
      price: "19,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/bltf394757329116141/75345.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Centrotavola di fiori secchi",
      price: "49,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/bltb76f113cca5cced0/10314.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
  ];

const BigCard = () => {

    return(

      <Box p={3}
      style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
      <h2>Consigliati per te</h2>
      <Grid
      // display="flex"
      container
      direction="row"
      flexWrap="nowrap"
      spacing={2}
    //   textAlign='center'
      style={{
        overflowX:'scroll',
        scrollBehavior:'smooth'
        }}>
      {first.map((element, index) => {
        return (
          <Grid item
          //key?
          sx={{
            display: 'flex',
            flex: '0 0 90%',
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
            <AnotherCard
            key={index}
            nameItem={element.nameItem}
            price={element.price}
            image={element.image}
            />
          </Grid>
          );
          })}
      </Grid>
      </Box>
    )
}

export default BigCard
