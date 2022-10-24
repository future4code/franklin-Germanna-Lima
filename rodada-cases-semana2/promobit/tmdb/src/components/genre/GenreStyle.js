import styled from "styled-components";

export const GenreUl=styled.ul`
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    align-content: center;
    justify-content: center;
    position: absolute;
    width: 1146px;
    height: 12px;
    top:329px;
    left: 202px;
    height:40px;
    
    
    `
export const GenreLi = styled.li`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 4px;


    width: 90px;
    height: 40px;
    margin: 12px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
    color: black;
    font-family: Roboto;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;

    }
`