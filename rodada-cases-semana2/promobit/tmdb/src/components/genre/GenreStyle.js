import styled from "styled-components";

export const GenreUl=styled.ul`
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    align-content: center;
    justify-content: center;
    position: absolute;
    width: 71,62rem;
    height: 0.75rem;
    top:20.56rem;
    left: 12.65rem;
    height:2.5rem;
    
    
    `
export const GenreLi = styled.li`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius:0.25rem;


    width: 5.62rem;
    height: 2.5rem;
    margin: 0.31rem 0.625rem 0.31rem 0.625rem !important;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
    color: black;
    font-family: Roboto;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;

    }
`