import React, { useContext } from 'react'
import start from '../../Assets/start.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SlabContext } from '../../Context/SlabContext'

export const SlabsContent = ({topic, slabId}) => {

    console.log('slabContent')
    console.log(topic)

    return (
        <>
        <div className="slab-counter">
            <h2>{topic.slab.title}</h2>
            <div className="slab-sect-a">
            <Link className="linkSlab" to = {`/content-text/${topic.slab.id}`}>
                <article className="article-a1">
                    <h3 className="h3-slab">Contenido</h3>
                    <p className="p-slab">{topic.content[0].description}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            <Link className="linkSlab" to={`/Activity-A/${topic.slab.id}/${topic.activities[0].id}`}>
                <article className="article-b1">
                    <h3 className="h3-slab">Actividad A</h3>
                    <p className="p-slab">{topic.activities[0].description}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            </div>
            <div className="slab-sect-b">
            <Link className="linkSlab" to={`/activity-B/${topic.slab.id}/${topic.activities[1].id}`}>
                <article className="article-a2">
                    <h3 className="h3-slab">Actividad B</h3>
                    <p className="p-slab">{topic.activities[1]?.description}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            <Link className="linkSlab" to="/autoevaluation">
                <article className="article-b2">
                    <h3 className="h3-slab">AUTOEVALUACIÓN</h3>
                    <p className="p-slab">{topic.autoevaluation[0].description}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            </div>
        </div>
        </>
    )
}

SlabsContent.propTypes = { 
    slabId: PropTypes.string.isRequired
}