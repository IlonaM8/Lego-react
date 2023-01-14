import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import styles from './style.css'
import AnotherCard from "./Card";

export const first = [
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
      image:"https://www.lego.com/cdn/cs/set/assets/bltf2777e75d6cb7718/71037.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
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

export const third = [
    {
      nameItem: "L'avamposto della spada",
      price: "44.99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt42d6492d65b164a8/21244.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Gandalf il Grigio e Balrog™",
      price: "19.99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt625e667e3b206d20/40631.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Macchina del tempo Ritorno al futuro",
      price: "199,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt55fbccadb7d66885/10300.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Millennium Falcon™",
      price: "849,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt95c35d4ed5665a49/75192.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "NASA Apollo 11 Lunar Lander",
      price: "99,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt5e2703640ec85d2a/10266.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Bouquet fiori selvatici",
      price: "59,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt474bb80770911c58/10313.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Cuore ornamentale",
      price: "12,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt2b016d5b4a954e0e/40638.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Vincent Van Gogh-Notte stellata",
      price: "169,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "L'albero dei soldi",
      price: "24,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/bltd5f0302fe3c594ea/40648_alt1.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Boutique hotel",
      price: "229,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/blt62f99776b13a8e94/10297.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
    {
      nameItem: "Centrotavola di fiori secchi",
      price: "49,99 €",
      image:"https://www.lego.com/cdn/cs/set/assets/bltb76f113cca5cced0/10314.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    },
  ];

const BigCard = (props) => {
    return(

      <Box p={5}
        >
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
        {props.array.map((element, index) => {
         return (
          <Grid item
          sx={{
            display: 'flex',
            flex: '0 0 95%',
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
