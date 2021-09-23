import React from 'react'
import { Desarrollo, Ilus, Link, Res, SectionResumen, Titulo } from './Elements'

const Resumen = ({data, link}) => {
    return (
        <>
            <SectionResumen>
                <Res>
                <Titulo>Resumen</Titulo>
                    <Desarrollo>
                        {data}
                    </Desarrollo>
                    <Link href={link}>{link}</Link>
                </Res>
                <Ilus>
                    
                </Ilus>
            </SectionResumen>
        </>
    )
}

export default Resumen
