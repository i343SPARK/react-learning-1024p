import React from 'react'

/*
Buscar por id de actividad pasar el id de la actividad al presionar >3< 
https://xlp-lab-backend-mysql.herokuapp.com/activities/activityById/{activityId}
*/
export function ActivityADescribt(activityData) {

    console.log(activityData)
    //const {data: activity, loading: activityLoading, error: activityError} = useFetch(`activities/activityById/1`)
    return (
        <section className="intro-text-content">
                <>
                <h1>{activityData.title}</h1>
                <p className="intro-p">{activityData.description}</p>
                </>
        </section>
    )
}
