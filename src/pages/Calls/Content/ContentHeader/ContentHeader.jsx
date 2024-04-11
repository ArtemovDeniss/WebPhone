import { useState, useEffect } from 'react'
import servises from '../../../../services/callsList'

const ContentHeader = () => {
    const [items, renderHeader] = useState([])

    useEffect(() => {
        (async () => {
            const  response = await servises.get();

            renderHeader(response)
        })()
    }, []);
    
    return (
        <div className='header-info'>
            <div className='calling-info'>
                <div className='date-time'>
                    <div className='date'>Oct 20
                        <div className='time'>21:43</div>
                    </div>
                </div>
                <div className="humen">
                    <div className="number">+15552233443</div>
                    <div className="name">Theresa Webb</div>
                </div>
                <div className="btns">
                    <button className="Inbound">Inbound</button>
                    <button className="Answered">Answered</button>
                </div>
            </div>
            <button></button>
        </div>
    )
}


export default ContentHeader
