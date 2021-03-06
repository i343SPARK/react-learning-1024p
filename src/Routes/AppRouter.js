import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {IndexScreen} from '../Components/Index/IndexScreen'
import {ContentTextScreen} from '../Components/contentText/ContentTextScreen'
import { ContentVideoScreen } from '../Components/contentVideo/ContentVideoScreen'
import { ActivityAScreen } from '../Components/activityA/ActivityAScreen'
import { ActivityBScreen } from '../Components/activityB/ActivityBScreen'
import { AutoevaluacionScreen } from '../Components/autoevaluetion/AutoevaluacionScreen'


export default function AppRouter() {
    return (
        <Switch>
            <Route exact path='/' component={IndexScreen} />
            <Route exact path='/content-text/:slabId' component={ContentTextScreen}/>
            <Route exact path='/content-video/:slabId' component={ContentVideoScreen} />
            <Route exact path='/Activity-A/:slabId/:activityId' component={ActivityAScreen} />
            <Route exact path='/activity-B/:slabId/:activityId' component={ActivityBScreen} />
            <Route exact path='/autoevaluation' component={AutoevaluacionScreen} />
            <Route render={() => <IndexScreen />} />
        </Switch>
    )
}
