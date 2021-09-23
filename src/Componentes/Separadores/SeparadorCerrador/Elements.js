import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: ${({sentido}) => (sentido ? `auto 300px` : `300px auto`)};
    grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};
    

    @media screen and (min-width: 320px) {
        height: 80px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto` : ` auto`)};
        grid-template-areas:  ${({sentido}) => (sentido ? `'img'` : `'img'`)};
    }
    @media screen and (min-width: 768px) {
        height: 100px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 200px` : `200px auto`)};
        grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};

    }
    @media screen and (min-width: 993px) {
        height: 125px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 250px` : `250px auto`)};   
        grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};

    }
    @media screen and (min-width: 1200px) {
        height: 125px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 300px` : `300px auto`)};
        grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};          

    }



`
 
export const ContIlustracion = styled.div`
    
    grid-area: img;
    
    border-left: 3px solid ${props => props.theme.colorDetalles};
    @media screen and (min-width: 320px) {
        height: 80px;
     }
     @media screen and (min-width: 768px) {
         height: 100px;
     }
     @media screen and (min-width: 993px) {
         height: 125px;
     }
     @media screen and (min-width: 1200px) {
         height: 125px;  
     }
    

`    

export const Ilustracion = styled.img`
    width: 100%;
    height: 100%;
    user-select: none;
    -o-object-fit: cover;
    object-fit: cover;
`

export const DecCont = styled.div`
     z-index: 10;

    @media screen and (min-width: 320px) {
        height: 80px;
    }
    @media screen and (min-width: 768px) {
        height: 100px;
        width:200px;
    }
    @media screen and (min-width: 993px) {
        height: 125px;
        width:250px;
    }
    @media screen and (min-width: 1200px) {
        height: 125px;  
        width:300px;
    }
`

export const Dec = styled.img`
    z-index: 20;
    
    grid-area: cat;
    width: 100%;
    height: 100%;
    
    
    background-size: cover;
    -o-object-fit: cover;
    object-fit: cover;
    @media screen and (min-width: 320px) {
       display: none;
    }
    @media screen and (min-width: 768px) {
        display: grid;
    }
    @media screen and (min-width: 993px) {
        display: grid;
    }
    @media screen and (min-width: 1200px) {
        display: grid;       

    }
`