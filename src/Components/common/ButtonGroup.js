import { useHistory } from 'react-router-dom';

export const ButtonGroup = ({ className, text }) => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <>
            <button type='button' className={className} onClick={goBack}>
                <span className='pinkPaper-icon'></span>
                {text}
            </button>
        </>
    )
}