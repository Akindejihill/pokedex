import './Pokedex.css';
import Pokecard from './Pokecard'

const Pokedex = function({cards}){
    return (
        <div className="pokedex">
            {cards.map(card => <Pokecard id={card.id} key={card.id} name={card.name} type={card.type} exp={card.base_experience} />)}
        </div>
    );
}

export default Pokedex;