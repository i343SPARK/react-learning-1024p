import React from 'react'
import { Link } from 'react-router-dom'

export function ActivityAContent(dataActivity) {
    console.log(dataActivity)
    return (
        <section className="activityA-content">
                <h2>{dataActivity.dataActivity.type}</h2>
            <div className='timer-content'>
                <span className='timer'></span>
                <p className='p-time'>5 min.</p>
            </div>
            <section className='content-center'>
                <div className='descript-content'>
                    <article className='scroll-describt'>
                        <h3>{dataActivity.dataActivity.content}</h3>
                        <p className='activityA-activity'></p>
                    </article>
                </div>
                <div className='left-content-buttoms'>
                    <Link to='/Activity-A' className='activityA-buttom'><span className='pinkPaper-icon'></span> Actividad A</Link>
                    <Link to='/activity-B' className='activityB-buttom'><span className='grayPaper-icon'></span> Actividad B</Link>
                </div>
            </section>
            <div className='bottom-div'>
                <Link to='/content-video' className='back-buttom'>Atrás</Link>
                <Link to='/activity-B' className='next-buttom'>Actividad B</Link>
            </div>
        </section>
    )
}
