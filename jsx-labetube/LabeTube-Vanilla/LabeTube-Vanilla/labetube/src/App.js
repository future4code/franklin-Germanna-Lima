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
   
   <div class="tela-inteira">
        <header>
            <Red>Lab Tube</Red>
            <input className="campo-busca" type="text" placeholder="Pesquisar" id="campoDeBusca"/>
        </header>

        <main>
            <Rosa className="menu-vertical">
                <ul>
                   <ItemMenu menu={'Início'}></ItemMenu>
                   <ItemMenu menu={'Em alta'}></ItemMenu>
                   <ItemMenu menu={'Inscrições'}></ItemMenu>
                   <hr/>
                   <ItemMenu menu={'Originais'}></ItemMenu>
                   <ItemMenu menu={'Histórico'}></ItemMenu>

                </ul>
            </Rosa>

            <section className="painel-de-videos">
               <Card classNameCard={"box-pagina-principal media1"} srcCard={"https://picsum.photos/400/400?a=1 "}></Card>
               <Card classNameCard={"box-pagina-principal media2"} srcCard={"https://picsum.photos/400/400?a=2 "}></Card>
               <Card classNameCard={"box-pagina-principal media3"} srcCard={"https://picsum.photos/400/400?a=3 "}></Card>
               <Card classNameCard={"box-pagina-principal media4"} srcCard={"https://picsum.photos/400/400?a=4 "}></Card>
               <Card classNameCard={"box-pagina-principal media5"} srcCard={"https://picsum.photos/400/400?a=5 "}></Card>
               <Card classNameCard={"box-pagina-principal media6"} srcCard={"https://picsum.photos/400/400?a=6 "}></Card>
               <Card classNameCard={"box-pagina-principal media7"} srcCard={"https://picsum.photos/400/400?a=7 "}></Card>
               <Card classNameCard={"box-pagina-principal media8"} srcCard={"https://picsum.photos/400/400?a=8 "}></Card>
            </section>
        </main>

        <footer>
            <h4>Labenu 2022</h4>
        </footer>
    </div>
  );
}

export default App;
