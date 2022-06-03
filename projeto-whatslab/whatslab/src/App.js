import './App.css';
import styled from 'styled-components';

const CaixaTotal= styled.div`
  flex: 1 1;
  flex-direction: column;
  height: 39.2rem;
  border: 2px solid rgb(0, 0, 0);
  background: #80808026;
`;

const CaixaEscrita=styled.div`
display: flex;
`;

function App() {
  return (
    <CaixaTotal>
      <div className="caixa-enviado"></div>
      <CaixaEscrita className="caixa-escrita">
        <input type="text" className="usuario" placeholder="Usuário" value=""></input>
        <input type="text" className="mensagem" placeholder="Mensagem" value=""></input>
        <button type="submit" onClick="texto {console.log('texto')}" className='botao'>Enviar</button>
      </CaixaEscrita>
    </CaixaTotal>
  );
}

export default App;
