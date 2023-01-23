import React, { useState } from "react"
import { API_KEY, API_URL } from "../../constantes/api"
import { Filme } from "../../components/filme/Filme"
import { Genre } from "../../components/genre/Genre"
import { GenreLi, GenreUl } from "../../components/genre/GenreStyle"
import { Header } from "../../components/header/Header"
import { useRequest } from "../../global/GlobalContext"
import { Filmeli, FiltraP, H1Home, HeaderGenre, Main } from "../home/HomeStyle"

export const HomePage = () =>{
    const [genre, setGenre] = useState(null)
    const page = "15"

    const [data] = useRequest( API_URL,`genre/movie/list?${API_KEY}&language=pt-br`, [])
    const [film] = useRequest( API_URL,`movie/popular?${API_KEY}&language=pt-BR&page=&${page}`,[])
    
    const genres = data.genres
    
    const popular = film.results


    return(
        <Main>
            <Header/>
            <HeaderGenre>
                <div>
                    <H1Home>Milhões de filmes, séries e pessoas para descobrir. Explore já.</H1Home>
                    <FiltraP>Filtrar Por: </FiltraP>
                    <GenreUl>{genres?.map((item)=>{
                        return (
                            <GenreLi onClick={()=>{
                                if(genre !== null){
                                    setGenre(null)
                                }else{
                                    setGenre(item.id)
                                }}
                            }>
                                <Genre key={item.name} genre={item.name}/>
                            </GenreLi>
                        )
                    })}</GenreUl>

                </div>
            </HeaderGenre>
            <Filmeli>
            {popular? 
            popular.filter((rated)=>{if(genre === null){return rated.id
                                    } else { return rated.genre_ids.includes(genre)
                   }}).map((rated)=> {return <Filme movie={rated}/>}):<p/>
            }

            </Filmeli>
        </Main>
    )
}