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
      <footer>
        De: Rodrigo Silva Coelho - <a href='https://github.com/jeffersoncarvalho/ufc_2023_1/blob/main/WEB_T01/PROVA-1-D/PRIMEIRA%20AVALIA%C3%87%C3%83O%20PARCIAL%20-%20D.pdf'>Descrição da Prova</a>
      </footer>
    </div>
  );
}

export default App;
