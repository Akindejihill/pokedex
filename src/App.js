import cards from './cards'
import Pokedex from './Pokedex'
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex cards={cards}/>
    </div>
  );
}

export default App;
