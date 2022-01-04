import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';

export const BackButton = ({className}) => {

    const history = useHistory()
    
    const goBack = () => {
      history.goBack()
    }

    return (
        <>
         <button type='button' className={className} onClick={goBack}>Atrás</button>
        </>
    )
}