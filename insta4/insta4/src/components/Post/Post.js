import React, {useState} from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`
//Componente Post que inializa 4 propriedades
function Post(props){
  const [state, setState] = useState({
    // Usado para a condicional do icone mudar ao ser curtido
    curtido: false,
    //Contador de curtidas
    numeroCurtidas: 0,
    // Usado para a condicional se está comentado ou não. Ao clicar muda o estado de false para true
    comentando: false,
    //Contador de comentários
    numeroComentarios: 0
  })
//desestruturação?
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
//Função que gera um console.log toda vez que é clicado no icone
  const onClickCurtida = () => {
    console.log('Curtiu!')
  }
  
  //Variável comentado começa false, ao ser clicada, muda para true e gera o JSX com o espaço para ser comentado + gera um console.log que mostra se true ouy false
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    console.log(comentando)
  }
  //Ao clicar em enviar o comentario, muda a variável comentando para false e add ao contador mais um comentário
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  //Renderizar coração
  const handlePhoto = (event) => {
    onClickCurtida (event.target.value)
  }

    let iconeCurtida
    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }

  return(
    <PostContainer>
      
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>
      {/* JSX */}
      <PostFooter>
        {/* Componente */}
        <IconeComContador
          // condicional que muda a cor do coração do icone da curtida
          icone={iconeCurtida}
          //Propriedade onClickIcone do reack que modifica ao ser clicado + Uma arrow fuction que gera um console.log que informa quando é curtido
          onClickIcone={handlePhoto}
          //Hook useState que muda o numero de curtidas na variável numeroCurtidas + ! Não está usando o handleInput para atualizar a tela
          valorContador={state.numeroCurtidas}
        />

        <IconeComContador
          //import do icone de comentário
          icone={iconeComentario}
          //Propriedade onClickIcone do reack que modifica ao ser clicado +  ao ser clicado seta comentario como false e fecha a seção de escrita do comentário + condicional com comentado true gera um componenteComentario que recebe um jsx secaoComentario + props aoEnviar
          onClickIcone={onClickComentario}
          //Hook useState que muda o numero de curtidas na variável numeroComentarios + ! Não está usando o handleInput para atualizar a tela
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
    
  )
}


export default Post