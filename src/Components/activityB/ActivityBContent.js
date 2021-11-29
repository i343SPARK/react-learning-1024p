import React from 'react'
import { Link } from 'react-router-dom'

export function ActivityBContent() {
    return (
        <section className="activityB-content">
                <h2>Técnica didáctica</h2>
            <div className='timer-content'>
                <span className='timer'></span>
                <p className='p-time'>5 min.</p>
            </div>
            <section className='content-center'>
                <div className='descript-content'>
                    <article className='scroll-describt'>
                        <h3>Actividad B</h3>
                        <p className='activityA-activity'></p>
                    </article>
                </div>
                <div className='left-content-buttoms'>
                    <Link to='/Activity-A' className='activityA-buttom'><span className='pinkPaper-icon'></span> Actividad A</Link>
                    <Link to='/activity-B' className='activityB-buttom'><span className='grayPaper-icon'></span> Actividad B</Link>
                </div>
            </section>
            <div className='bottom-div'>
                <Link to='/Activity-A' className='back-buttom'>Atrás</Link>
                <Link to='/' className='next-buttom'>Siguiente</Link>
            </div>
        </section>
    )
}
