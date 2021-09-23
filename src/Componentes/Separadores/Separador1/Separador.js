import React from 'react'
import { Categoria, Container, ContIlustracion, Ilustracion } from './Elements'

const Separador = ({imagen,data, clas}) => {

    
    console.log('asd separador', imagen)
    console.log('asd separador', data.imga)
    return (
        <>
            <Container sentido={data.sentido} name={clas}>
                
                <Categoria>{data.cat}</Categoria>
                <ContIlustracion sentido={data.sentido}>
                    <Ilustracion src={imagen} preserveAspectRatio="none"/>    
                </ContIlustracion>
            </Container>
        </>
    )
}

export default Separador
