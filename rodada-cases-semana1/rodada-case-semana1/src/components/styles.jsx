import styled from "styled-components";

export const SidebarComponent = styled.main`
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
  width: 1600px;
  height: 1080px;
  
  background: #EFEFEF;
  
  `
export const ComponentsSection1 = styled.section`
      display: flex;
      flex-direction: column;
      padding: 0 3.12rem 0 3.12rem;
      width: 30%;
      height: 100%;
      justify-content: space-between;
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
    line-height: 37px;
    text-transform: uppercase;

    color: #FFFFFF;

    img{
        padding: 0 1rem 0 0;
    }
    
`
export const ComponentsSection2 = styled.section`
    position: absolute;
    left: 0%;
    right: 61.69%;
    top: 0%;
    bottom: 0%;
    height: 100%;
       
    p{
        position: absolute;
        left: 120%;
        top: 89.17%;
        bottom: 8.98%;
        width:139%;

        font-weight: 400;
        font-size: 1rem;
        line-height: 20px;
        text-transform: uppercase;
    }
    
`
export const ComponentsFooter = styled.footer`
    p{
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.25rem;
        font-weight: bold;

    }

    div{
        font-weight: 700;
        font-size: 1.25rem;
    }

`
//5