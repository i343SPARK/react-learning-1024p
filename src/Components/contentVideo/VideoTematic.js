import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import { BackButton } from '../common/BackButton'
import { ButtonGroup }  from '../common/ButtonGroup'

export function VideoTematic(topic) {

    const url = 'https://www.youtube.com/embed/' + topic.topic.url;
    console.log(url)
    const { data: activity, loading: activityLoading, error: activityError } = useFetch(`activities/activityBySlabId/${topic.topic.slabId}`)
    console.log(activity)

    return (
        <section className="content-video-data">
            <h2>{topic.topic.title}</h2>
            <div className='timer-content'>
                <span className='timer'></span>
                <p className='p-time'>{topic.topic.time}</p>
            </div>
            <section className='content-center'>
                {/* <div className='descript-content'> */}
                <iframe className='video-content' src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* </div> */}
                <div className='left-content-buttoms'>
                    <ButtonGroup className = {'ready-content-buttom'} text={'Contenido'}/>
                    <Link to='/content-video' className='video-page-buttom'><span className='grayVideo-icon'></span> Video</Link>
                </div>
            </section>
            <div className='bottom-div'>
                <BackButton className={'back-buttom'}/>
                {(!activityLoading) &&
                    (<Link to={`/Activity-A/${topic.topic.slabId}/${activity[0].id}`} className='ready-buttom'>Actividad A</Link>)}
            </div>
        </section>
    )
}
