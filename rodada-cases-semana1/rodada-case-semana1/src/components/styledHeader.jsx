import styled from "styled-components"

export const ComponentsHeader = styled.header`

    /* Rectangle 3 - local de escolha da loteria*/
     select{
        position: absolute;
        width: 20rem;
        left: 15.8%;
        right: 61.69%;
        top: 8.52%;
        bottom: 87.3%;
        background: #FFFFFF;

        font-weight: 600;
        font-size: 1.5rem;
        padding: 0.25rem 0.625rem;
        border: none;
        border-radius: 0.375rem;
    }
    li{
        list-style: none;
        display: flex;
        position: absolute;
        flex-direction: row;
        justify-content: space-around;
        left:  47.5rem;
        top: 45%;
        font-size:5rem;


        ul{
            list-style: none;
            padding:0 1rem 0 1rem;
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