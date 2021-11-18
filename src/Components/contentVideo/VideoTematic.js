import React from 'react'
import { Link } from 'react-router-dom'

export function VideoTematic() {
    return (
        <section className="content-video-data">
                <h2>Proceso de descubrimiento</h2>
            <div className='timer-content'>
                <span className='timer'></span>
                <p className='p-time'>5 min.</p>
            </div>
            <section className='content-center'>
                {/* <div className='descript-content'> */}
                <iframe className='video-content' src="https://www.youtube.com/embed/8txpDvFnh5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* </div> */}
                <div className='left-content-buttoms'>
                    <Link to='/content-text' className='ready-content-buttom'><span className='pinkPaper-icon'></span> Contenido</Link>
                    <Link to='/content-video' className='video-page-buttom'><span className='grayVideo-icon'></span> Video</Link>
                </div>
            </section>
            <div className='bottom-div'>
                <Link to='/content-text' className='back-buttom'>Atrás</Link>
                <Link className='ready-buttom'>Listo</Link>
            </div>
        </section>
    )
}
