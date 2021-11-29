import React from 'react'
import { ActivityBDescribt } from './ActivityBDescribt'
import { ContentHeader } from './ContentHeader'
import { ActivityBContent } from './ActivityBContent'

export function ActivityBScreen() {
    return (
        <>
            <ContentHeader/>
            <ActivityBDescribt/>
            <ActivityBContent/>
        </>
    )
}
