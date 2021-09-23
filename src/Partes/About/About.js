import React from 'react'
import { Col1, Col2, SectionInverse,Texto, Deco, DecoCont, VideoC, VideoCont,Wrap, DecoCont2,TextoCont} from './Elements'
import pibe from '../../Assets/imagenes/mia.jpg'
import './foto.scss'
const About = ({imagen}) => {
    return (
        <>
            <SectionInverse>
                
                <Col1>
                    <Texto>
                        Hola de nuevo! me gustaria hablarte un poco de mi. Tengo 23 años y actualmente vivo en Tucuman, Argentina. 
                        Ademas de dedicarme al desarrollo Frontend soy estudiante de Ingenieria Informatica en la Universidad Santo Tomas de Aquino.
                        Me apasiona el diseño web, me gusta ser creativo con mis diseños e intento innovar siempre con el objetivo de darle una experiencia unica al usuario.
                        Al no tener experiencia laboral en el sector decidi crear los proyectos de este portafolio. Cada proyecto tiene una planificacion previa con un tiempor limite de desarrollo, tareas diarias, una maqueta en Figma. Me puse el desafio de trabajar como si fuera proyectos reales con clientes reales.
                        Espero que sea de tu agrado mi portafolio, cualquier feedback es bienvenido!
                    </Texto>
                </Col1>
                <Col2>
                    <Wrap>
                        <TextoCont>
                            <Texto>
                                Hola de nuevo! me gustaria hablarte un poco de mi. Tengo 23 años y actualmente vivo en Tucuman, Argentina. 
                                Ademas de dedicarme al desarrollo Frontend soy estudiante de Ingenieria Informatica en la Universidad Santo Tomas de Aquino.
                                Me apasiona el diseño web, me gusta ser creativo con mis diseños e intento innovar siempre con el objetivo de darle una experiencia unica al usuario.
                                Al no tener experiencia laboral en el sector decidi crear los proyectos de este portafolio. Cada proyecto tiene una planificacion previa con un tiempor limite de desarrollo, tareas diarias, una maqueta en Figma. Me puse el desafio de trabajar como si fuera proyectos reales con clientes reales.
                                Espero que sea de tu agrado mi portafolio, cualquier feedback es bienvenido!
                            </Texto>
                        </TextoCont>

                        <DecoCont>
                            <Deco src={imagen}/>
                        </DecoCont>
                        
                        <VideoCont>
                            <div class="c-glitch" style={{backgroundImage:` url(${pibe})`}}>
                                <div class="c-glitch__img" style={{backgroundImage:` url(${pibe})`}}></div>
                                <div class="c-glitch__img"style={{backgroundImage:` url(${pibe})`}}></div>
                                <div class="c-glitch__img" style={{backgroundImage:` url(${pibe})`}}></div>
                                <div class="c-glitch__img" style={{backgroundImage:` url(${pibe})`}}></div>
                                <div class="c-glitch__img" style={{backgroundImage:` url(${pibe})`}}></div>
                            </div>
                        </VideoCont>
                        <DecoCont2>
                            <Deco src={imagen}/>
                        </DecoCont2>
                    </Wrap>    
                </Col2>
            </SectionInverse>
        </>
    )
}

export default About
