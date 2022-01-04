import React from 'react'
import { Link } from 'react-router-dom'
import { BackButton } from '../common/BackButton'
import { useFetch } from '../../Hooks/useFetch'

export function ActivityAContent(dataActivity) {

    const { data: activity, loading: activityLoading, error: activityError } = useFetch(`activities/activityBySlabId/${dataActivity.dataActivity.slabId}`)

    console.log(dataActivity)
    console.log(activity)
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

                    {(!activityLoading) &&
                        (
                            <>
                            <Link to= {`/Activity-A/${dataActivity.slabId}/${activity[0].id}`} className='activityA-buttom'><span className='pinkPaper-icon'></span> Actividad A</Link>
                            <Link to= {`/activity-B/${dataActivity.slabId}/${activity[1].id}`} className='activityB-buttom'><span className='grayPaper-icon'></span> Actividad B</Link>
                            </>
                        )}
                </div>
            </section>
            <div className='bottom-div'>
                <BackButton className={'back-buttom'} />
                {!(activityLoading) && (
                    <Link to={`/activity-B/${dataActivity.slabId}/${activity[1].id}`} className='next-buttom'>Actividad B</Link>
                )}
            </div>
        </section>
    )
}
