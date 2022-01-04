import React from 'react'
import { ActivityADescribt } from './ActivityADescribt'
import { ContentHeader } from './ContentHeader'
import { ActivityAContent } from './ActivityAContent'
import { useFetch } from '../../Hooks/useFetch'
import { useParams } from 'react-router'

export function ActivityAScreen() {

    const { slabId, activityId } = useParams();

    console.log(activityId)
    const { data: activity, loading: activityLoading, error: activityError } = useFetch(`activities/activityById/${activityId}`)

    return (
        <>
            <ContentHeader />
            {(!activityLoading) && (
                <>
                    <ActivityADescribt activityData={activity[0]} />
                    <ActivityAContent dataActivity={activity[0]} />
                </>
            )}
        </>
    )
}
