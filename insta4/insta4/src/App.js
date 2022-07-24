import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
  const listaNomes = ['paulinha', 'maria', 'joice'];
  const listaFotoUsuarios = ['https://picsum.photos/50/50', 'https://picsum.photos/50/50', 'https://picsum.photos/50/50'];
  const listaFotoPosts = ['https://picsum.photos/200/150', 'https://picsum.photos/200/150', 'https://picsum.photos/200/150']
  
  return(
    <MainContainer>
           <Post
            nomeUsuario={listaNomes[0]}
            fotoUsuario={listaFotoUsuarios[0]}
            fotoPost={listaFotoPosts [0]}
          />
            <Post
            nomeUsuario={listaNomes[1]}
            fotoUsuario={listaFotoUsuarios[1]}
            fotoPost={listaFotoPosts [1]}
          />
            <Post
            nomeUsuario={listaNomes[2]}
            fotoUsuario={listaFotoUsuarios[2]}
            fotoPost={listaFotoPosts [2]}
          />
    </MainContainer>
)

}


export default App;
