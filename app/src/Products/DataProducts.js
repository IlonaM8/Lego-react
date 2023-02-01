import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import ListCard from "./products";
import BasicPagination from "./pagination";
import { useState } from "react";

export const List = [
  { id: 1,
    category: "Set",
    interest: "Animali",
    age: "6+",
    nameItem: "Casetta per uccelli",
    price: "29.99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt60b8b9324fadbdfd/31143.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 2,
    category: "Adulti",
    interest: "Arts and Crafts",
    age: "18+",
    nameItem: "Gandalf il Grigio e Balrog™",
    price: "19.99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt625e667e3b206d20/40631.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 3,
    category: "Set",
    interest: "Arte",
    age: "9+",
    nameItem: "Aragorn™ e Arwen™",
    price: "19,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blta84e06d436db4688/40632.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 4,
    category: "Regali di Pasqua",
    interest: "Barche",
    age: "13+",
    nameItem: "Frodo™ e Gollum™",
    price: "14,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt66f9f99e366a124d/40630.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 5,
    category: "Fiori",
    interest: "Arte",
    age: "18+",
    nameItem: "Narcisi",
    price: "12,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt5b0537aa2f0c1bce/40646.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 6,
    category: "Fiori",
    interest: "Arte",
    age: "18+",
    nameItem: "Bouquet fiori selvatici",
    price: "59,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt474bb80770911c58/10313.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 7,
    category: "Regali di Pasqua",
    interest: "Arts and Crafts",
    age: "6+",
    nameItem: "Cartolina dall'Australia",
    price: "14,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt9cdeec0032a63903/40651.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 8,
    category: "Set",
    interest: "Animali",
    age: "6+",
    nameItem: "Danzatore del leone",
    price: "9,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt29d71e0f0a2b3015/40540.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 9,
    category: "Set",
    interest: "Arte",
    age: "6+",
    nameItem: "L'albero dei soldi",
    price: "24,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltd5f0302fe3c594ea/40648_alt1.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 10,
    category: "Set",
    interest: "Arts and Crafts",
    age: "6+",
    nameItem: "Set scacchi LEGO™",
    price: "64,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt46a07a9b068b46c2/40174.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 11,
    category: "Fiori",
    interest: "Arte",
    age: "18+",
    nameItem: "Centrotavola di fiori secchi",
    price: "49,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltb76f113cca5cced0/10314.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },

  { id: 12,
    category: "Adulti",
    interest: "Arte",
    age: "18+",
    nameItem: "L'avamposto della spada",
    price: "44.99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt42d6492d65b164a8/21244.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 13,
    category: "Set",
    interest: "Regali di Pasqua",
    age: "6+",
    nameItem: "Gandalf il Grigio e Balrog™",
    price: "19.99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt625e667e3b206d20/40631.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 14,
    category: "Set",
    interest: "Arts and Crafts",
    age: "13+",
    nameItem: "Il Quinjet degli Avengers",
    price: "99,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blte17bd71ca0739648/76248.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 15,
    category: "Adulti",
    interest: "Edifici",
    age: "18+",
    nameItem: "Millennium Falcon™",
    price: "849,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt95c35d4ed5665a49/75192.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 16,
    category: "Fiori",
    interest: "Arte",
    age: "18+",
    nameItem: "Negozio design e fioraio",
    price: "159,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt641f3aa0e518bae9/41732.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 17,
    category: "Fiori",
    interest: "Arte",
    age: "18+",
    nameItem: "Bouquet fiori selvatici",
    price: "59,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt474bb80770911c58/10313.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 18,
    category: "Home decor",
    interest: "Arte",
    age: "6+",
    nameItem: "Cuore ornamentale",
    price: "12,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt2b016d5b4a954e0e/40638.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 19,
    category: "Fiori",
    interest: "Arte",
    age: "6+",
    nameItem: "Narcisi",
    price: "12,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt5b0537aa2f0c1bce/40646.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 20,
    category: "Set",
    interest: "Animali",
    age: "6+",
    nameItem: "L'albero dei soldi",
    price: "24,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltd5f0302fe3c594ea/40648_alt1.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 21,
    category: "Set",
    interest: "Edifici",
    age: "18+",
    nameItem: "Gli appartamenti di Friends",
    price: "179,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt227c50ab0713ddf2/10292.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
  { id: 22,
    category: "Home decor",
    interest: "Arte",
    age: "18+",
    nameItem: "Centrotavola di fiori secchi",
    price: "49,99 €",
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltb76f113cca5cced0/10314.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  },
];

const ProductsList = (props) => {
  const [List, setProducts] = useState([]);
  return (
    <>
    <Box>
      <Box p={5}>
        <div>
          <Grid
            //   xs={4}
            container
            //   direction="row"
            //   flexWrap="nowrap"

            //   textAlign='center'
            // style={{
            //   overflowX: "scroll",
            //   scrollBehavior: "smooth",
            // }}
          >
            {List.map((element, index) => {
              return (
                <Grid item flex xs={6} sm={6} md={6} lg={4} xl={4}>
                  <ListCard
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
      <BasicPagination setProducts={(p) => setProducts(p)} />
    </Box>
    </>
  );
};



export default ProductsList;
