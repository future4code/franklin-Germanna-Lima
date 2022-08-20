import React from 'react';
import styled from 'styled-components';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno  from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

const DivApp =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const DivPageSectionContainer=styled.div`
  width: 40vw;
  margin: 10px 0;
`

const H3PagesSectionContainer = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`
const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
function App() {
  return (
    <DivApp>
      <DivPageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Germanna Oliveira" 
          descricao="Oi, eu sou a Germanna Oliveira. Sou funcionária do Grupo Boticário e aluna da Labenu. Adoro café e cuscuz."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </DivPageSectionContainer>

      <DivPageSectionContainer>
        <H2>Experiências profissionais</H2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Farmacêutica" 
          descricao="Formanda pela Universidade Federal do Ceará." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Desenvolvedora" 
          descricao="Em formação pela Labenu e Alura" 
        />
      </DivPageSectionContainer>

      <DivPageSectionContainer>
        <H2>Minhas redes sociais</H2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </DivPageSectionContainer>
      <DivPageSectionContainer>
        <CardPequeno
          link="###"
          nomeRede="Linkedin"
        />
      </DivPageSectionContainer>
    </DivApp>
  );
}

export default App;
