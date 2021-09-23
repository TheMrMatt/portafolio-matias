import React from 'react'
import { ButonPr, ButtonWrap, Container, Cv, CvWrap, Red, Redes, RedesWrap, Texto, Wrapp, Insta, Twi, Link, GitHub, DownIcon } from './Elements'
import cv from '../../Assets/Cv/MatiasRojas.pdf'

const Footer = () => {
    return (
        <>
            <Container>
                <Redes>
                    <Texto>Mis Redes: </Texto>   
                    <RedesWrap>
                       
                        <Wrapp>
                            <Red to={{ pathname:'https://www.instagram.com/matiase98/' } } target="_blank">
                                <Insta />    
                            </Red>
                            <Red to={{pathname:'https://twitter.com/Matiaserojas98'}} target="_blank">
                                <Twi />
                            </Red>
                        </Wrapp>
                        <Wrapp>
                            <Red to={{pathname:'https://www.linkedin.com/in/-matiasrojas/'}} target="_blank">
                                <Link />
                            </Red>
                            <Red to={{pathname:'https://github.com/TheMrMatt'}} target="_blank">
                                <GitHub />
                            </Red> 
                        </Wrapp>
                    </RedesWrap>
                </Redes>
                <Cv>
                    <CvWrap>
                        <Texto>Mi Cv:</Texto>
                        <ButtonWrap>
                            <ButonPr href={cv} download>
                                <DownIcon />
                            </ButonPr>
                        </ButtonWrap>
                    </CvWrap>
                </Cv>
            </Container>
        </>
    )
}

export default Footer
