import React from 'react'
import { VideoDescribt } from './VideoDescribt'
import { ContentHeader } from './ContentHeader'
import { VideoTematic } from './VideoTematic'
import { useFetch } from '../../Hooks/useFetch'
import { useParams } from 'react-router'

export function ContentVideoScreen() {
    
    const {slabId} = useParams(); 
    const {data, loading, error} = useFetch(`videos/videoBySlab/${slabId}`)

    return (
        <>
            <ContentHeader/>
            {(!loading)&& (
                <>
                <VideoDescribt topic = {data[0]}/>
                <VideoTematic topic = {data[0]}/>
                </>
            )}
        </>
    )
}
