import './App.css';
import { Questao01X } from './components/questao01';
import { Pokemon } from './components/questao02';
import { Assincronos } from './components/questao03';

function App() {
  return (
    <div className="App">
      <fieldset>
        <legend>Questão 01</legend>
        <Questao01X></Questao01X>
      </fieldset>
      <fieldset>
        <legend>Questão 02</legend>
        <Pokemon></Pokemon>
      </fieldset>
      <fieldset>
        <legend>Questão 03</legend>
        <Assincronos></Assincronos>
      </fieldset>
    </div>
  );
}

export default App;
