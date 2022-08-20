import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Card } from './components/CardComponent';
import { ItemMenu } from './components/ItemMenuComponet';

const Red=styled.h1`
color: red;
`

const Rosa=styled.nav`
color: grey;
`

function App() {
  
  return (
   
   <div className="tela-inteira">
        <header>
            <Red>Lab Tube</Red>
            <input className="campo-busca" type="text" placeholder="Pesquisar" id="campoDeBusca"/>
        </header>

        <main>
            <Rosa className="menu-vertical">
                <ul>
                   <ItemMenu menu={'Início'}/>
                   <ItemMenu menu={'Em alta'}/>
                   <ItemMenu menu={'Inscrições'}/>
                   <hr/>
                   <ItemMenu menu={'Originais'}/>
                   <ItemMenu menu={'Histórico'}/>

                </ul>
            </Rosa>

            <section className="painel-de-videos">
               <Card classNameCard={"box-pagina-principal media1"} srcCard={"https://picsum.photos/400/400?a=1 "}/>
               <Card classNameCard={"box-pagina-principal media2"} srcCard={"https://picsum.photos/400/400?a=2 "}/>
               <Card classNameCard={"box-pagina-principal media3"} srcCard={"https://picsum.photos/400/400?a=3 "}/>
               <Card classNameCard={"box-pagina-principal media4"} srcCard={"https://picsum.photos/400/400?a=4 "}/>
               <Card classNameCard={"box-pagina-principal media5"} srcCard={"https://picsum.photos/400/400?a=5 "}/>
               <Card classNameCard={"box-pagina-principal media6"} srcCard={"https://picsum.photos/400/400?a=6 "}/>
               <Card classNameCard={"box-pagina-principal media7"} srcCard={"https://picsum.photos/400/400?a=7 "}/>
               <Card classNameCard={"box-pagina-principal media8"} srcCard={"https://picsum.photos/400/400?a=8 "}/>
            </section>
        </main>

        <footer>
            <h4>Labenu 2022</h4>
        </footer>
    </div>
  );
}

export default App;
