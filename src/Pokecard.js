import './Pokecard.css';

const Pokecard = function(prop){
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${prop.id}.png`
    return(
        <div className="pokecard">
            <p className="pokecard-name">{prop.name}</p>
            <img className="pokecard-avatar" src={avatar} alt={prop.name}></img>
            <p className="pokecard-type">{prop.type}</p>
            <p className="pokecard-exp">{prop.exp}</p>
        </div>
    )
}

export default Pokecard;