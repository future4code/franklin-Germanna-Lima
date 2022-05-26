import './App.css';
// import './coletaTexto.js';

function App() {
  return (
    <div className="caixa-total">
      <div className="caixa-enviado"></div>
      <div className="caixa-escrita">
        <input type="text" className="usuario" placeholder="Usuário" value=""></input>
        <input type="text" className="mensagem" placeholder="Mensagem" value=""></input>
        <button type="submit" onClick="texto{ console.log('texto')}" className='botao'>Enviar</button>
      </div>
    </div>
  );
}

export default App;
