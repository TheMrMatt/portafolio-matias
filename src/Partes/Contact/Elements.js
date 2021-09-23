import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    border-bottom: 3px solid ${props => props.theme.colorDetalles};
`

export const Texto = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.155em;

    color: ${props => props.theme.colorLetras};
`