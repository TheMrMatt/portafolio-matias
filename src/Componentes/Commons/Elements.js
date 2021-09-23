import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    background-color: ${props => props.theme.colorFondo};
    z-index: -100;
    @media screen and (min-width: 320px) {
        padding: 0px 20px 20px 20px;
    }
    @media screen and (min-width: 768px) {
        padding: 20px 30px 30px 30px;

    }
    @media screen and (min-width: 993px) {
        padding: 20px 35px 35px 35px;

    }
    @media screen and (min-width: 1200px) {
        padding: 20px 40px 40px 40px;

    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid ${props => props.theme.colorDetalles}; 
`

export const Section = styled.div`
   
    
    @media screen and (min-width: 320px) {
        width: 100%;
        
        display: grid; 
        grid-template-columns: [uno] auto [end];
    }
    @media screen and (min-width: 768px) {
        display: grid; 
        grid-template-columns: [uno] auto [end];

    }
    @media screen and (min-width: 993px) {
        display: grid; 
        grid-template-columns: [uno] auto [cuatro] 250px [end];   

    }
    @media screen and (min-width: 1200px) {
        display: grid; 
        grid-template-columns: [uno] auto [cuatro] 300px [end];          

    }

    
    border-bottom: 3px solid ${props => props.theme.colorDetalles};
`

