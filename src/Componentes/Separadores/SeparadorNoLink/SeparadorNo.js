import React from 'react'
import { Categoria, Container, ContIlustracion, Ilustracion, Wrap } from './Elements'

const SeparadorNo = ({data, imagen}) => {
    return (
        <>
             <Container sentido={data.sentido} >
                
               
                <ContIlustracion sentido={data.sentido}>
                    <Ilustracion src={imagen}/>    
                </ContIlustracion>
                <Wrap >
                    <Categoria>{data.cat}</Categoria> 
                   
                </Wrap>
                
            </Container>
        </>
    )
}

export default SeparadorNo
