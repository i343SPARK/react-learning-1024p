import React from 'react'
import { VideoDescribt } from './VideoDescribt'
import { ContentHeader } from './ContentHeader'
import { VideoTematic } from './VideoTematic'

export function ContentVideoScreen() {
    return (
        <>
            <ContentHeader/>
            <VideoDescribt/>
            <VideoTematic/>
        </>
    )
}
