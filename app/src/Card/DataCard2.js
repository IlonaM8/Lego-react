import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import styles from "./style.css";
import AnotherCard from "./Card";

export const first = [
  {
    nameItem: "Casetta per uccelli",
    price: "29.99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt60b8b9324fadbdfd/31143.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Gandalf il Grigio e Balrog™",
    price: "19.99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt625e667e3b206d20/40631.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Aragorn™ e Arwen™",
    price: "19,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blta84e06d436db4688/40632.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Frodo™ e Gollum™",
    price: "14,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt66f9f99e366a124d/40630.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Narcisi",
    price: "12,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt5b0537aa2f0c1bce/40646.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Bouquet fiori selvatici",
    price: "59,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt474bb80770911c58/10313.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Cartolina dall'Australia",
    price: "14,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt9cdeec0032a63903/40651.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Danzatore del leone",
    price: "9,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt29d71e0f0a2b3015/40540.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "L'albero dei soldi",
    price: "24,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltd5f0302fe3c594ea/40648_alt1.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Set scacchi LEGO™",
    price: "64,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt46a07a9b068b46c2/40174.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Centrotavola di fiori secchi",
    price: "49,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltb76f113cca5cced0/10314.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
];

export const third = [
  {
    nameItem: "L'avamposto della spada",
    price: "44.99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt42d6492d65b164a8/21244.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Gandalf il Grigio e Balrog™",
    price: "19.99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt625e667e3b206d20/40631.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Il Quinjet degli Avengers",
    price: "99,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blte17bd71ca0739648/76248.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Millennium Falcon™",
    price: "849,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt95c35d4ed5665a49/75192.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Negozio design e fioraio",
    price: "159,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt641f3aa0e518bae9/41732.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Bouquet fiori selvatici",
    price: "59,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt474bb80770911c58/10313.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Cuore ornamentale",
    price: "12,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt2b016d5b4a954e0e/40638.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Narcisi",
    price: "12,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt5b0537aa2f0c1bce/40646.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "L'albero dei soldi",
    price: "24,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltd5f0302fe3c594ea/40648_alt1.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Gli appartamenti di Friends",
    price: "179,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt227c50ab0713ddf2/10292.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  {
    nameItem: "Centrotavola di fiori secchi",
    price: "49,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltb76f113cca5cced0/10314.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
];

const BigCard = (props) => {
  return (
    <Box p={5}>
      <h2>{props.title}</h2>
      <div className="changeMe">
        <Grid
          // display="flex"
          container
          direction="row"
          flexWrap="nowrap"
          spacing={3}
        >
          {props.array.map((element, index) => {
            return (
              <Grid
                item
                sx={{
                  display: "flex",
                  flex: "0 0 100%",
                }}
                xs={12}
                sm={6}
                md={5}
                lg={3}
                xl={3}
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
      </div>
    </Box>
  );
};

export default BigCard;
