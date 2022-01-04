import React from 'react'
import { ActivityBDescribt } from './ActivityBDescribt'
import { ContentHeader } from './ContentHeader'
import { ActivityBContent } from './ActivityBContent'
import { useFetch } from '../../Hooks/useFetch'
import { useParams } from 'react-router'

export function ActivityBScreen() {
   
    const {activityId} = useParams(); 

    const {data: activity, loading: activityLoading, error: activityError} = useFetch(`activities/activityById/${activityId}`)

    return (
        <>
            <ContentHeader/>
            {(!activityLoading) && (
                <>
                <ActivityBDescribt data = {activity[0]}/>
                <ActivityBContent data = {activity[0]}/>
                </>
            )}
            
        </>
    )
}
