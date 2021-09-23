import React,{useContext, useEffect, useState} from 'react'
import {Container, Wrapper} from '../Componentes/Commons/Elements'
import Separador from '../Componentes/Separadores/Separador1/Separador'
import HeaderHome from '../Partes/HeaderHome/HeaderHome'
import Nav from '../Partes/Nav/Nav'
import Separador2 from '../Componentes/Separadores/Separador2/Separador2'
import SeparadorCerrador from '../Componentes/Separadores/SeparadorCerrador/SeparadorCerrador'
import About from '../Partes/About/About'
import Proyecto from '../Componentes/Proyecto/Proyecto'
import Footer from '../Partes/Footer/Footer'
import {SeparadorData1, SeparadorData2, SeparadorData3, SeparadorData4} from '../Componentes/Separadores/DataSep'
import { useHistory } from "react-router-dom";
import { ProyectosContext } from '../Store/Contexto/ProyectosContext'
import ThemeChange from '../Componentes/ThemeChange/ThemeChange'
import Contact from '../Partes/Contact/Contact'
import { SvgCont } from '../Componentes/Svgs/Elements'
import { DataContexto } from '../Store/Contexto/DataContexto'
import Loader from '../Componentes/Loader/Loader'

const Home = (props) => {
   
    let history = useHistory();
    const {Proyectos} = useContext(ProyectosContext)
    const {dat,temas,getTema,startLoading,loading} = useContext(DataContexto)
    useEffect(()=>{
        //startLoading()
        getTema(props.theme, temas)
        console.log('data', props.theme)
    },[props])

    function handleClick(url) {
        console.log('hola')
        
        history.push(`/proyecto/${url}`);
    }

    //
   
    if(loading === true) return <Loader/>
    return (
        <>
            <Container>
                <ThemeChange props={props.setTheme}/>
               
                <Wrapper>
                    <Nav logo={false} imagen={dat[4]} logoI={dat[7]}/>
                    <HeaderHome imagen={dat[6]} letra={dat[8]} fondo={dat[9]}/>
                    <Separador clas='about' data={SeparadorData1} resp={true} imagen={dat[0]}/>
                    <About imagen={dat[5]}/>
                    <Separador props={props.themes.separadores} clas='proyectos' data={SeparadorData2} imagen={dat[1]} resp={false}/>
                    <Proyecto data={Proyectos[0]}  sentido={false} />
                    <Separador2 clas={true} data={SeparadorData3}  resp={false} url={Proyectos[0].id} imagen={dat[2]}/>
                    <Proyecto data={Proyectos[1]}  sentido={true} />
                    <Separador2 clas={true} data={SeparadorData4}  resp={false} url={Proyectos[1].id} imagen={dat[1]}/>
                    <Proyecto data={Proyectos[2]}  sentido={false} />
                    <Separador2 clas={true} data={SeparadorData3}  resp={false} url={Proyectos[2].id} imagen={dat[2]}/>
                    <Contact />
                    <SeparadorCerrador imagen={dat[3]} diag ={dat[10]}/>
                    <Footer/>
                </Wrapper>
            </Container>
        </>
    )
}

export default Home
