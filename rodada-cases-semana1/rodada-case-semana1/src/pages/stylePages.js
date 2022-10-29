import styled from "styled-components";

export const SidebarComponent = styled.div`
    /* Sidebar */
    position: absolute;
    left: 0%;
    right: 61.69%;
    top: 0%;
    bottom: 0%;
    height: 100%; 
`
export const Body = styled.div`
    position: relative;
    width: 100rem;
    height: 67.5rem;  
`
export const ComponentsSection1 = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 3.12rem 0 3.12rem;
    width: 39%;
    height: 100%;
    justify-content: space-between;
    /* border-right: 20rem solid rgb(107,239,163) */
`

export const ComponentsTitle = styled.h1`
    position: absolute;
    display: flex;
    align-items: center;
    left: 4.11%;
    right: 73.57%;
    top: 48.43%;
    bottom: 48.52%;
    width: 100%;
    
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 2.31rem;
    text-transform: uppercase;

    color: #FFFFFF;

    img{
        padding: 0 1rem 0 0;
    }
    
`

export const ComponentsSection2 = styled.section`
    background: #EFEFEF;
    width: 73.75rem;
    height: 68.43rem;
    left: 30.81rem;
    top: -69.43rem;
    position: relative;
    border-radius: 22.5rem 0 0 22.5rem;
`
export const ComponentsSection2Ul = styled.ul`
    position: relative;
    top: 41.7%;
    width: 53rem;
    display: flex;
    justify-content: space-between;
    left: 15%;
    bottom: 48.42%;
    
    li{
        list-style: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 1.68rem;
        line-height: 2.0625rem;
        color: #333333;
        text-align: center;

        /* Circulo */
        background: #FFFFFF;
        border-radius: 50%;
        width: 6.95rem;
        height: 6.46rem;

        padding-top: 3.75rem;

    }
    
    `