import './App.css';
import {useState} from "react"

function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  return (
    <div className="App">
      <div className="container">
        <p>Digite o nome:</p>
        <input type="text" className="campo_texto" value={nome} onChange={e => setNome(e.target.value)}/>
      </div>

      <div className="container">
        <p>Digite o telefone:</p>
        <input type="text" className="campo_texto" value={telefone} onChange={e => setTelefone(e.target.value)}/>
      </div>

      <div id="caixa_centro">
        <div id="conteudo_caixa">
          <p>{nome}</p> 
          <p>{telefone}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
