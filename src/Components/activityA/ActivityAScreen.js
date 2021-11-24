import React from 'react'
import { ActivityADescribt } from './ActivityADescribt'
import { ContentHeader } from './ContentHeader'
import { ActivityAContent } from './ActivityAContent'

export function ActivityAScreen() {
    return (
        <>
            <ContentHeader/>
            <ActivityADescribt/>
            <ActivityAContent/>
        </>
    )
}
