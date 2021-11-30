import React from 'react'
import { Link } from 'react-router-dom'

export function AutoevaluacionContent() {
    return (
        <section className="autoevaluation-content">
                <h2>Evaluación</h2>
            <div className='timer-content'>
                <span className='timer'></span>
                <p className='p-time'>5 min.</p>
            </div>
            <section className='content-center'>
                <div className='descript-content'>
                    <article className='scroll-describt'>
                        <h3>Autoevaluación</h3>
                        <p className='activityA-activity'></p>
                    </article>
                </div>
                <div className='left-content-buttoms'>
                    <Link to='/autoevaluation' className='autoevaluation-buttom'><span className='grayPaper-icon'></span>Evaluación</Link>
                </div>
            </section>
            <div className='bottom-div'>
                <Link to='/Activity-A' className='back-buttom'>Atrás</Link>
                <Link to='/' className='next-buttom'>Finalizar</Link>
            </div>
        </section>
    )
}
