import React from 'react'
import Bgimg from "../../Assets/BG.png"
import cima from '../../Assets/CIMA.png'
import persons from '../../Assets/persons.png'
import { Link } from 'react-router-dom'


export const IndexHero = () => {
    return (
        <section className="background-hero">
            <Link to="/">
                <img className='cima' src={cima} alt="cima"/>
            </Link>
            <img className="hero-bg" src={Bgimg} alt="Hero-Cima"/>
            <div className="text-hero">
                <h1>Administración de ventas</h1>
                <p className="phero">Bienvenido a microlearning de adminstración de ventas, participa en esta experiencia donde desarrollaras aprendizajes únicos para las ventas.</p>
            <img className='persons' src={persons} alt="cima"/>
            </div>
        </section>
    )
}
