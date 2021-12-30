import logo from './logo.svg';
import './App.css';
import { useGetPokemonList } from './useGetPokemonList';
import { Card, Container } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  const pokemonList = useGetPokemonList();

  console.log(pokemonList);

  return (
    <Container className="App">
      <Box clasName="header">
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
      <Box className="pokemon-list">
        <Card className="pokemon-list-item">
          This is an element from material UI
        </Card>
      </Box>
    </Container>
  );
}

export default App;
