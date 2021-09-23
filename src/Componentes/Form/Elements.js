import styled from "styled-components";


export const FormContainer = styled.form`
   
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 320px) {
        width: 90%;
    }
    @media screen and (min-width: 768px) {
        width: 650px;
    }
    @media screen and (min-width: 993px) {
        width: 800px;
    }
    @media screen and (min-width: 1200px) {
        width: 800px;
    }
    

`

export const Wrap = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    width: 100%;
   

    @media screen and (min-width: 320px) {
        flex-direction: column;
        height: 180px;
    }
    @media screen and (min-width: 768px) {
        flex-direction: row;
        height: 75px;
    }
    @media screen and (min-width: 993px) {
        flex-direction: row;
        height: 75px;
    }
    @media screen and (min-width: 1200px) {
        flex-direction: row;
    }
`

export const Input = styled.input`
    width: 100%; 
    height: 75px;
    color: ${props => props.theme.colorLetras};
    border: 1px solid ${props => props.theme.colorDetalles};
    background:  ${props => props.theme.colorFondo};
    padding: 15px;
`


export const Input2 = styled.input`
    
    height: 75px;
    background:  ${props => props.theme.colorFondo};
    border: 1px solid ${props => props.theme.colorDetalles};
    color: ${props => props.theme.colorLetras};
    padding: 15px;
    @media screen and (min-width: 320px) {
        width:100%; 
    }
    @media screen and (min-width: 768px) {
        width:300px; 
    }
    @media screen and (min-width: 993px) {
        width:350px; 
    }
    @media screen and (min-width: 1200px) {
        width:350px; 
    }

`

export const Mensaje = styled.textarea`
    width: 100%; 
    height: 150px;
    background:  ${props => props.theme.colorFondo};
    border: 1px solid ${props => props.theme.colorDetalles};
    color: ${props => props.theme.colorLetras};
    padding: 15px;
`

export const SubmitB = styled.button`
    width: 250px;
    height: 75px;
    text-decoration: none;
    border: 1px solid ${props => props.theme.colorDetalles};
    background:  ${props => props.theme.colorFondo};
    color: ${props => props.theme.colorLetras};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: all 0.7s ease-in-out;

    &:hover{
        color:  ${props => props.theme.colorFondo};
        background-color: ${props => props.theme.colorDetalles}; 
        transition: all 0.7s ease-in-out;
    }
`

export const Error = styled.span`

    color: red;
`

export const InpWrap = styled.div`
width: 100%; 
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    &:nth-child(2n){
        align-items: flex-end;
      }
`