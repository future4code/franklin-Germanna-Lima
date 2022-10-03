import styled from "styled-components";

export const ComponentsMain = styled.main`
    position: relative;
    display: flex;
    height: 56rem;
    align-items: space-around;
    min-height: 56rem;
    @media (max-widht:30rem){
        display: grid;
        background-color: 217, 205, 213;
        grid-template-rows: 28rem;
        section{
            align-items: center;
            width: 100%;
            justify-content: center;
            display: grid;
            
            div{
                align-self: center;
            }
        }
        h1{
            display: grid;
            justify-content: center;
        }
        select{
            margin: 0 auto;
            display: grid;
            justify-content: center;
        }
        img{
            margin: 0 auto;
        }
    }
    
`
export const ComponentsList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1rem;
    max-width:46rem;
    flex-wrap: wrap;
    li{
        background-color: white;
        display: flex;
        width: 4.3rem;
        height: 4.3rem;
        list-style: none;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 700;
        border-radius: 50%;
    }
`
export const ComponentsTitle = styled.h1`
    font-size: 1.2rem;
    display: flex;
    gap: 1.255rem;
    align-items: center;
    
`
export const ComponentsFooter = styled.footer`
    p{
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.25rem;

    }

    div{
        font-weight: 700;
        font-size: 1.25rem;
    }
`
export const ComponentsSection1 = styled.section`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 3.12rem 3.12rem;
    width: 30%;
    height: 100%;
    justify-content: space-between;
    select{
        font-weight: 600;
        font-size: 0.75rem;
        padding: 0.25rem 0.625rem;
        border: none;
        border-radius: 0.375rem;
    }
`
export const ComponentsSection2 = styled.section`
    display: flex;
    flex-direction: column;
    background-color: 226,224,224;
    padding: 3.12rem 1rem;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    span{
        font-size: small;
        position: absolute;
        bottom: 4.3rem;
    }
`
//5