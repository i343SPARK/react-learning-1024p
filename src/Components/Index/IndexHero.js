import React from 'react'
import Bgimg from "../../Assets/BG.png"
import cima from '../../Assets/CIMA.png'
import persons from '../../Assets/persons.png'
import { Link } from 'react-router-dom'

export const IndexHero = (course) => {

    return (
        <section className="background-hero">
            <Link to="/">
                <img className='cima' src={cima} alt="cima"/>
            </Link>
            <img className="hero-bg" src={Bgimg} alt="Hero-Cima"/>
            <div className="text-hero">
                <h1>{course.title}</h1>
                <p className="phero">{course.description}</p>
            <img className='persons' src={persons} alt="cima"/>
            </div>
        </section>
    )
}
