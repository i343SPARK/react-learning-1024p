import React from 'react'
import { Link } from 'react-router-dom'

export function ContentTematic(topic) {
    console.log('content tematic')
    console.log(topic)
    return (
        <section className="content-data">
                <h2>contenido temático</h2>
            <div className='timer-content'>
                <span className='timer'></span>
                <p className='p-time'>{topic.topic.time}</p>
            </div>
            <section className='content-center'>
                <div className='descript-content'>
                    <article className='scroll-describt'>
                        <h3>Contenido</h3>
                        <p className='text-topic'>
                        {topic.topic.content}
                        </p>
                    </article>
                </div>
                <div className='left-content-buttoms'>
                    <Link to='/content-text' className='content-buttom'><span className='pinkPaper-icon'></span> Contenido</Link>
                    <Link to={`/content-video/${topic.topic.slabId}`} className='video-buttom'><span className='grayVideo-icon'></span> Video</Link>
                </div>
            </section>
            <div className='bottom-div'>
                <Link to='/' className='back-buttom'>Atrás</Link>
                <Link to={`/content-video/${topic.topic.slabId}`} className='next-buttom'>Video</Link>
            </div>
        </section>
    )
}
