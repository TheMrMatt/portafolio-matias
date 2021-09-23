import styled, {keyframes} from "styled-components";

const hover = keyframes`
    0% {
        transform: scale(.5);
        color: #121212;
        -webkit-text-stroke: 2px white;
    }

    20% {
        transform: scale(1);
        color: pink;
        -webkit-text-stroke: 3px white;
        filter: drop-shadow(0 0 1px black)drop-shadow(0 0 1px black)drop-shadow(0 0 3px red)drop-shadow(0 0 5px red)hue-rotate(10turn);
    }

    50% {
        transform: scale(.5);
        color: #121212;
        -webkit-text-stroke: 2px white;
    }
`

export const Cont = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: black;
    align-items: center;
    justify-content: center;

`

export const Letras = styled.div`
    text-align: center;    
`

export const Letra = styled.p`
    display: inline-block;
    text-transform: uppercase;
    text-align: center;
    font-size: 4em;
    font-family: arial;
    font-weight: 600;
    transform: scale(.5);
    color: ${props => props.theme.colorLetras};
    -webkit-text-stroke: 2px white;

    &:nth-child(1) {
        animation: ${hover} 1s linear infinite;
      }
      
      &:nth-child(2) {
        animation: ${hover} 1s linear infinite .125s;
      }
      
      &:nth-child(3) {
        animation: ${hover} 1s linear infinite .25s;
      }
      
      &:nth-child(4) {
        animation: ${hover} 1s linear infinite .375s;
      }
      
      &:nth-child(5) {
        animation: ${hover} 1s linear infinite .5s;
      }
      
      &:nth-child(6) {
        animation: ${hover} 1s linear infinite .675s;
      }
      
      &:nth-child(7) {
        animation: ${hover} 1s linear infinite .75s;
      }
`


