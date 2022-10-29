import styled from "styled-components";

export const Main = styled.main`
    width: 90rem;
    height: 155.81rem;
    
@media screen and (max-width:360px) {
    width: 22.5rem;
    height: 281.25rem;
        
}
`
export const H1Home = styled.h1`
    position: absolute;
    height: 7rem;
    width: 50rem;
    left: 20.5rem;
    top: 5.5rem;

    font-family: Roboto;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.5rem;
    letter-spacing: -0.005rem;
    text-align: center;

    color: #FFFFFF;
`


export const FiltraP = styled.p`
    text-transform: uppercase;

    position: absolute;
    width: 6.3rem;
    height: 1.25rem;
    left: 42.43rem;
    top: 15.25rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    /* identical to box height, or 143% */


    color: #FFFFFF;
`


export const HeaderGenre = styled.div`
    position: absolute;
    width: 100%;
    height: 28rem;
    top: 3.5rem;
    background: #2D0C5E;

    div{
        width: 100%;
        height: 100%;
    }
`

export const Filmeli = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    position: absolute;
    
    margin: 0 7rem 0 7rem;
    height: 87rem;
    width: 76rem;
    
    left: 9.5rem;
    top: 33rem;
    
    border-radius: 0.25rem;

`