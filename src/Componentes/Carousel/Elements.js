import styled from "styled-components";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Container = styled.div`
    width: 100%;
    min-height: 450px;
    display: grid;
    position: absolute;
   
    
    

    @media screen and (min-width: 320px) {
       
        
        grid-template-columns: [uno] auto [end];
        grid-template-rows: [uno] auto [dos] 100px [end];
        grid-template-areas:   'img'
                               'bot';
                
    }
    @media screen and (min-width: 768px) {
        
        grid-template-columns: ${({sentido}) => (sentido ? `100px auto 100px` : `100px auto 100px`)};
        grid-template-areas:  ${({sentido}) => (sentido ? `'iz img der'` : `'iz img der'`)};     
        grid-template-rows: [uno] auto [end];     
    }
    @media screen and (min-width: 993px) {
       
        grid-template-columns: ${({sentido}) => (sentido ? `100px auto 100px` : `100px auto 100px`)};
        grid-template-areas:  ${({sentido}) => (sentido ? `'iz img der'` : `'iz img der'`)};          
        grid-template-rows: [uno] auto [end];
    }
    @media screen and (min-width: 1200px) {
        
        grid-template-columns: ${({sentido}) => (sentido ? `100px auto 100px` : `100px auto 100px`)};
       
        grid-template-areas:  ${({sentido}) => (sentido ? `'iz img der'` : `'iz img der'`)};    
        grid-template-rows: [uno] auto[end];      

    }
`

export const ImagCont = styled.div`
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;

    transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        
    transition-duration: 1s;

   

`


export const Imag = styled.img`
    grid-area: img;
    max-width: 100%;
    user-select: none;
    -o-object-fit: cover;
    object-fit: cover;
    
    @media screen and (min-width: 320px) {
        height: 350px;
     }
     @media screen and (min-width: 768px) {
        height: 450px;
     }
     @media screen and (min-width: 993px) {
        height: 550px;
     }
     @media screen and (min-width: 1200px) {
        height: 600px;
     }

`

export const Wrap = styled.div`
    
    width: 100px;
    height: 100px;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 320px) {
        display: none;
    }
    @media screen and (min-width: 768px) {
        display: flex;
    }
    @media screen and (min-width: 993px) {
        display: flex;
    }
    @media screen and (min-width: 1200px) {
        display: flex; 
        
    }
`

export const Wrap2 = styled.div`
    
    width: 100%;
    height: 100px;
    grid-area: bot;
   
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (min-width: 320px) {
        display: flex;
    }
    @media screen and (min-width: 768px) {
        display: none;
    }
    @media screen and (min-width: 993px) {
        display: none;
    }
    @media screen and (min-width: 1200px) {
        display: none; 
        
    }

`

export const LeftIcon = styled(FaAngleLeft)`
    width: 50px;
    height: 50px;
    color: ${props => props.theme.colorLetras};
    transition: all 0.7s ease-in-out;
`

export const ButtonI = styled.div`
    width: 100%;
    height: 100%;
    grid-area: iz;
   
    background-color: #000;
    border: 2px solid ${props => props.theme.colorDetalles};
    color: #FFF;
    display: flex; 
    align-items: center;
    justify-content:center;
    cursor: pointer;
    transition: all 0.7s ease-in-out;

    &:hover{
        color:  ${props => props.theme.colorFondo};
        background-color: ${props => props.theme.colorDetalles}; 
        transition: all 0.7s ease-in-out;
        ${LeftIcon}{
            color:  ${props => props.theme.colorFondo};
            transition: all 0.7s ease-in-out;
        }
    }
`
export const RightIcon = styled(FaAngleRight)`
    width: 50px;
    height: 50px;
    color: ${props => props.theme.colorLetras};
    transition: all 0.7s ease-in-out;
`

export const ButtonD = styled.div`
    width: 100%;
    height: 100%;   
    grid-area: der;
    
    background-color: #000;
    border: 2px solid ${props => props.theme.colorDetalles};
    color: #FFF;
    display: flex; 
    align-items: center;
    justify-content:center;
    cursor: pointer;

    transition: all 0.7s ease-in-out;

    &:hover{
        color:  ${props => props.theme.colorFondo};
        background-color: ${props => props.theme.colorDetalles}; 
        transition: all 0.7s ease-in-out;
        ${RightIcon}{
            color:  ${props => props.theme.colorFondo};
            transition: all 0.7s ease-in-out;
        }
    }
`



