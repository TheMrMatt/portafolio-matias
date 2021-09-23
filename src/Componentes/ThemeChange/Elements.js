import styled from "styled-components";



export const Wrapp = styled.div`
    width: 100%;
    height: 20px;
    display: flex; 
    flex-direction: row;



    
`

export const ThemeCh = styled.div`
    
    height: 100%;
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 320px) {
        width: 30vw;
    }
    @media screen and (min-width: 768px) {
        width: 15vw;
    }
    @media screen and (min-width: 993px) {
        width: 10vw;
    }
    @media screen and (min-width: 1200px) {
        width: 10vw;
    }
    

`

export const ColorY = styled.div`
    width: 20px;
    height: 100%;
    cursor: pointer;
    background-color: #61BFD1;
`

export const ColorR = styled.div`
    width: 20px;
    height: 100%;
    cursor: pointer;
    background-color: #F2572C;
`

export const ColorB = styled.div`
    width: 20px;
    height: 100%;
    cursor: pointer;
    background-color: #001AED;
`

export const ColorW = styled.div`
    width: 20px;
    height: 100%;
    cursor: pointer;
    background-color: #FFF;
`