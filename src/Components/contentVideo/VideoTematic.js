import React from 'react'
import { Link } from 'react-router-dom'

export function VideoTematic() {
    return (
        <section className="content-data">
                <h2>contenido temático</h2>
            <div className='timer-content'>
                <span className='timer'></span>
                <p className='p-time'>5 min.</p>
            </div>
            <section className='content-center'>
                {/* <div className='descript-content'> */}
                <iframe className='descript-content' src="https://www.youtube.com/embed/8txpDvFnh5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* </div> */}
                <div className='left-content-buttoms'>
                    <Link to='/content-text' className='content-buttom'><span className='pinkPaper-icon'></span> Contenido</Link>
                    <Link className='video-buttom'><span className='grayVideo-icon'></span> Video</Link>
                </div>
            </section>
            <div className='bottom-div'>
                <Link to='/content-text' className='back-buttom'>Atrás</Link>
                <Link className='next-buttom'>Listo</Link>
            </div>
        </section>
    )
}
