import styled from "styled-components";
import {keyframes} from 'styled-components'

export const SectionInverse = styled.div`
   
    
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
        grid-template-columns: [uno] 250px [cuatro] auto [end];   

    }
    @media screen and (min-width: 1200px) {
        display: grid; 
        grid-template-columns: [uno] 300px [cuatro] auto [end];          

    }

    
    border-bottom: 3px solid ${props => props.theme.colorDetalles};
`

export const Col1 = styled.div`
    

    @media screen and (min-width: 320px) {
        display: none;
    }
    @media screen and (min-width: 768px) {
        display: none;

    }
    @media screen and (min-width: 993px) {
        grid-column-start: uno;
        grid-column-end: cuatro;
        min-height: 70vh;
        background: url();
        background-size: cover;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 10px;
    }
    @media screen and (min-width: 1200px) {
        grid-column-start: uno;
        grid-column-end: cuatro;
        min-height: 70vh;
        background: url();
        background-size: cover;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 10px;
    }    
`

export const Col2 = styled.div`
    
    
   
    
    @media screen and (min-width: 320px) {
        grid-column-start: uno;
        grid-column-end: end;
        border-left: 0px solid ${props => props.theme.colorDetalles};
        display: flex;
        min-height: 90vh;
        align-items: flex-end;
        justify-content: flex-start;
    }
    @media screen and (min-width: 768px) {
        grid-column-start: uno;
        grid-column-end: end;
        border-left: 0px solid ${props => props.theme.colorDetalles};
        display: flex;
        min-height: 90vh;
        align-items: flex-end;
        justify-content: flex-start;

    }
    @media screen and (min-width: 993px) {
        grid-column-start: cuatro;
        grid-column-end: end;
        border-left: 3px solid ${props => props.theme.colorDetalles};
        display: flex;
        min-height: 70vh;
        align-items: flex-end;
        justify-content: flex-start;      

    }
    @media screen and (min-width: 1200px) {
        grid-column-start: cuatro;
        grid-column-end: end;
        border-left: 3px solid ${props => props.theme.colorDetalles};
        display: flex;
        min-height: 70vh;
        align-items: flex-end;
        justify-content: center;
    }
`

export const Wrap = styled.div`
    

    @media screen and (min-width: 320px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding:10px;
    }
    @media screen and (min-width: 768px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding:10px;
    }
    @media screen and (min-width: 993px) {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-around;      

    }
    @media screen and (min-width: 1200px) {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    }
`

export const TextoCont = styled.div`
    @media screen and (min-width: 320px) {
        display: flex;  
        margin: 0px 0px 40px 0px;
    }
    @media screen and (min-width: 768px) {
        display:flex;
        margin: 0px 0px 50px 0px;
    }
    @media screen and (min-width: 993px) {
        display: none;
    }
    @media screen and (min-width: 1200px) {
       display: none;
    }
`    

export const Texto = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    
    pointer-events: none;
    color: ${props => props.theme.colorLetras};
    @media screen and (min-width: 320px) {
        width: 90%;
        line-height: 17px;
    }
    @media screen and (min-width: 768px) {
       
        width: 90%;
        line-height: 17px;
    }
    @media screen and (min-width: 993px) {
        width: 90%;
        line-height: 17px;

    }
    @media screen and (min-width: 1200px) {
        width: 90%;
        line-height: 18px;

    }
`

export const DecoCont = styled.div`
    
    @media screen and (min-width: 320px) {
        display: none;
    }
    @media screen and (min-width: 768px) {
        display: none;

    }
    @media screen and (min-width: 993px) {
        width: 100px;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 50px;

    }
    @media screen and (min-width: 1200px) {
        width: 100px;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 50px;

    }    

`

export const DecoCont2 = styled.div`
    
    
    

    @media screen and (min-width: 320px) {
        display: none;
    }
    @media screen and (min-width: 768px) {
        display: none;

    }
    @media screen and (min-width: 993px) {
        width: 100px;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 50px;

    }
    @media screen and (min-width: 1200px) {
        width: 100px;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 50px;

    }

`

export const Deco = styled.img`

`

const animation = keyframes`
    0% {
        background-position: 0 0;
        filter: hue-rotate(0deg);
    }
    10% {
        background-position: 5px 0;
        
    }
    20% {
        background-position: -5px 0;
        
    }
    30% {
        background-position: 15px 0;
        
    }
    40% {
        background-position: 5px 0;
        
    }
    50% {
        background-position: -25px 0;
        
    }
    60% {
        background-position: -50px 0;
        
    }
    70% {
        background-position: 0 -20px;
        
    }
    80% {
        background-position: -60px -20px;
        
    }
    90% {
        background-position: 0 0;
        
    }    
    100% {
        background-position: 5px 0;
        filter: hue-rotate(360deg);
    }

    

`

export const VideoC = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: url(${({img}) => img}) no-repeat;
    background-size: cover;

    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .5s;
        mix-blend-mode: hard-light;
        background: url(${({img}) => img});
    }

    &:hover:before{
            

        animation: ${animation} 2s linear infinite;
    }
`    

export const VideoCont = styled.div`
   

    @media screen and (min-width: 320px) {
        width: 90%;
        min-height: 350px;
    }
    @media screen and (min-width: 500px) {
        width: 90%;
        min-height: 500px;
    }
    @media screen and (min-width: 768px) {
        width: 90%;
        height 600px;

    }
    @media screen and (min-width: 993px) {
        width: 500px;
        height 600px;

    }
    @media screen and (min-width: 1200px) {
        width: 600px;
        height 600px;

    }

    &:hover {
        


        ${VideoC}   
}
`





