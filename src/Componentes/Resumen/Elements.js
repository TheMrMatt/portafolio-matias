import styled from "styled-components";

export const SectionResumen = styled.div`
    min-height: 350px;
    
    @media screen and (min-width: 320px) {
        width: 100%;
        
        display: grid; 
        grid-template-columns: [uno] auto [end];
        grid-template-areas: 'pro';
    }
    @media screen and (min-width: 768px) {
        display: grid; 
        grid-template-columns: [uno] auto [end];
       
    }
    @media screen and (min-width: 993px) {
        display: grid; 
        grid-template-columns: [uno] auto [dos] 350px [end];  
        grid-template-areas:  'pro des'; 
        grid-template-rows: [uno] auto [end];
    }
    @media screen and (min-width: 1200px) {
        display: grid; 
        grid-template-columns: [uno] auto [dos] 400px [end];          
        grid-template-areas: 'pro des';
        grid-template-rows: [uno] auto [end];
    }

    
    border-bottom: 3px solid ${props => props.theme.colorDetalles};
`

export const Res = styled.div`
    padding: 10px;
    
    @media screen and (min-width: 320px) {
        grid-row-start: uno;
        grid-row-end: dos;
        grid-area: pro;
        
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content:  flex-end;
        align-items: flex-start;
        
    }
    @media screen and (min-width: 768px) {
        grid-row-start: uno;
        grid-row-end: dos;
        grid-area: pro;
        
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content:  flex-end;
        align-items: flex-start;
        

    }
    @media screen and (min-width: 993px) {
        grid-column-start: uno;
        grid-column-end: dos;
        grid-area: pro;
        
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content:  flex-end;
        align-items: flex-start;
        border-right: 3px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 1200px) {
        grid-column-start: uno;
        grid-column-end: dos;
        grid-area: pro;
        
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        border-right: 3px solid ${props => props.theme.colorDetalles};
    }    
`

export const Ilus = styled.div`
    
        
  
  
   
    @media screen and (min-width: 320px) {
       
        display: none;
        

    }
    @media screen and (min-width: 768px) {
        
        display: none;
        

    }
    @media screen and (min-width: 993px) {
        grid-column-start: dos;
        grid-column-end: end;
        
        
    }
    @media screen and (min-width: 1200px) {
        grid-column-start: dos;
        grid-column-end: end;
        
        
    }
`

export const Titulo = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 21px;
    /* identical to box height */
    pointer-events: none;
    letter-spacing: 0.155em;
    margin-bottom: 2%;
    color: ${props => props.theme.colorLetras};
`

export const Desarrollo = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    width: 100%;
    line-height: 21px;
    letter-spacing: 0.155em;
    pointer-events: none;
    color: ${props => props.theme.colorLetras};
    margin-bottom: 25px;


    @media screen and (min-width: 320px) {
        font-size: 16px;

    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
    @media screen and (min-width: 993px) {
        font-size: 20px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 20px;
        
    }
    
`

export const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colorLetras};
    
    @media screen and (min-width: 320px) {
        font-size: 10px;

    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
    @media screen and (min-width: 993px) {
        font-size: 20px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 20px;
        
    }
`