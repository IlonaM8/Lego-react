import { Card } from "@mui/material";
import { Data, tipiProdotto } from './Data';



const CardList = (props) => {
    const filteredCards = props.cards.filter(card => {
        // check if the card's type matches the selected checkbox values
    });

    return (
        <div>
            {filteredCards.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
}

export default CardList;
