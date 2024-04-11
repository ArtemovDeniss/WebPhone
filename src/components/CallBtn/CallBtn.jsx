import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
const iconCall = <FontAwesomeIcon icon={faPhoneFlip} style={{color: "#203356",}} />
import './CallBtn.scss'


const CallBtn = () => {
    return (
        <div className='call-btn'>
            {iconCall}
        </div>
    )
}

export default CallBtn