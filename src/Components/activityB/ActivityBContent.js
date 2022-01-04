import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import { BackButton } from '../common/BackButton'

export function ActivityBContent(data) {

    const { data: activity, loading: activityLoading, error: activityError } = useFetch(`activities/activityBySlabId/${data.data.slabId}`)

    console.log(data)
    console.log(activity)

    return (
        <section className="activityB-content">
            <h2>{data.data.type}</h2>
            <div className='timer-content'>
                <span className='timer'></span>
                <p className='p-time'>5 min.</p>
            </div>
            <section className='content-center'>
                <div className='descript-content'>
                    <article className='scroll-describt'>
                        <h3>{data.data.content}</h3>
                        <p className='activityA-activity'></p>
                    </article>
                </div>
                <div className='left-content-buttoms'>
                    {(!activityLoading) && (
                        <>
                            <Link to={`/Activity-A/${data.slabId}/${activity[0].id}`} className='activityA-buttom'><span className='pinkPaper-icon'></span> Actividad A</Link>
                            <Link to={`/activity-B/${data.slabId}/${activity[1].id}`} className='activityB-buttom'><span className='grayPaper-icon'></span> Actividad B</Link>
                        </>
                    )}
                </div>
            </section>
            <div className='bottom-div'>
                <BackButton className={'back-buttom'} />
                <Link to='/autoevaluation' className='next-buttom'>Autoevaluación</Link>
            </div>
        </section>
    )
}
