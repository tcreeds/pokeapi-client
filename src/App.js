import logo from './logo.svg';
import './App.css';
import { useGetPokemonList } from './useGetPokemonList';

function App() {
  const pokemonList = useGetPokemonList();

  console.log(pokemonList);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
