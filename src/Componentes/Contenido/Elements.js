import styled from "styled-components";


export const Section = styled.div`
    min-height: 650px;
    @media screen and (min-width: 320px) {
        
        width: 100%;
        display: grid; 
        grid-template-columns: [uno] auto [end];
        grid-template-rows: [uno] 150px [dos] auto [end];
        grid-template-areas:   'des'
                               'pro';
    }
    @media screen and (min-width: 768px) {
        display: grid; 
        grid-template-columns: [uno] auto [end];
        grid-template-rows: [uno] 150px [dos] auto [end];
        grid-template-areas:   'des'
                               'pro'; 
        
    }
    @media screen and (min-width: 993px) {
        display: grid; 
        grid-template-columns: ${({sentido}) => (sentido ? `[uno] 250px [dos] auto [end]` : `[uno] auto [dos] 250px [end]`)};  
        grid-template-areas:  ${({sentido}) => (sentido ? `'des pro'` : `'pro des'`)}; 
        grid-template-rows: [uno] auto [end];
        
    }
    @media screen and (min-width: 1200px) {
        display: grid; 
        grid-template-columns: ${({sentido}) => (sentido ? `[uno] 300px [dos] auto [end]` : `[uno] auto [dos] 300px [end]`)};          
        grid-template-areas:  ${({sentido}) => (sentido ? `'des pro'` : `'pro des'`)};
        grid-template-rows: [uno] auto [end];
        
    }

    
    border-bottom: 3px solid ${props => props.theme.colorDetalles};
`

export const Imag = styled.div`
    

    @media screen and (min-width: 320px) {
        grid-row-start: uno;
        grid-row-end: dos;
        grid-area: pro;
        background: url();
        background-size: cover;
        position: relative;
        
        
    }
    @media screen and (min-width: 768px) {
        grid-row-start: uno;
        grid-row-end: dos;
        grid-area: pro;
        background: url();
        background-size: cover;
        position: relative;
        
        

    }
    @media screen and (min-width: 993px) {
        grid-column-start: uno;
        grid-column-end: dos;
        grid-area: pro;
        background: url();
        background-size: cover;
        position: relative;
        
        border-${({sentido}) => (sentido ? `left` : `right`)}: 3px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 1200px) {
        grid-column-start: uno;
        grid-column-end: dos;
        grid-area: pro;
        background: url();
        background-size: cover;
        position: relative;
        
        border-${({sentido}) => (sentido ? `left` : `right`)}: 3px solid ${props => props.theme.colorDetalles};
    }    
`

export const Desc = styled.div`
    
        
  
   padding: 10px;
   
    @media screen and (min-width: 320px) {
        grid-row-start: dos;
        grid-row-end: end;
        border-top: 0px solid ${props => props.theme.colorDetalles};
        display: flex;
        flex-direction: column;
        grid-area: des;
        align-items: flex-start;
        justify-content: space-between;

    }
    @media screen and (min-width: 768px) {
        grid-row-start: dos;
        grid-row-end: end;
        border-top: 0px solid ${props => props.theme.colorDetalles};
        display: flex;
        flex-direction: column;
        grid-area: des;
        align-items: flex-start;
        justify-content: space-between;

    }
    @media screen and (min-width: 993px) {
        grid-column-start: dos;
        grid-column-end: end;
        
        display: flex;
        flex-direction: column;
        grid-area: des;
        align-items: flex-start;
        justify-content: space-between;
        border-top: 0px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 1200px) {
        grid-column-start: dos;
        grid-column-end: end;
        
        display: flex;
        flex-direction: column;
        grid-area: des;
        align-items: flex-start;
        justify-content: space-between;
        border-top: 0px solid ${props => props.theme.colorDetalles};
    }
`

export const Titulo = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 63px;
    letter-spacing: 0.06em;
    pointer-events: none;
    color: ${props => props.theme.colorLetras};
`

export const Wrap = styled.div`
    width: 100%;
    height: 100px;
    
    display: flex;
    flex-direction: column;
    
    align-items: flex-start;
    justify-content: flex-start;

`

export const Subtitulo = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 21px;
    /* identical to box height */
    pointer-events: none;
    letter-spacing: 0.155em;

    color: ${props => props.theme.colorLetras};
`

export const Carr = styled.div`
    width: 100%;
    height: 100%;

    
`
