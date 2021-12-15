import React from 'react'
import { ActivityADescribt } from './ActivityADescribt'
import { ContentHeader } from './ContentHeader'
import { ActivityAContent } from './ActivityAContent'
import { useFetch } from '../../Hooks/useFetch'
import { SslabContext } from '../../Context/SlabContext'

export function ActivityAScreen() {

    const {data: activity, loading: activityLoading, error: activityError} = useFetch(`activities/activityById/1`)
    console.log(activity)
    return (
        <>
            <ContentHeader/>
            {(!activityLoading) &&(
                <>
                <ActivityADescribt activityData = {activity[0]}/>
                <ActivityAContent dataActivity = {activity[0]}/>
                </>
            )}
        </>
    )
}
