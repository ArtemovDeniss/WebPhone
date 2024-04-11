import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Calls from '../../pages/Calls/Calls'
import Contacts from '../../pages/Contacts/Contacts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
const iconCall = <FontAwesomeIcon icon={faPhoneFlip} size='lg' style={{color: "#ffffff",}} />
const iconContacts = <FontAwesomeIcon icon={faPhoneFlip} size='lg' style={{color: "#ffffff",}} />

import './Nav.scss'


const Nav = () => {
    return (
        <>
            <BrowserRouter>
                <ul className='nav-list'>
                    <li><NavLink to='/' className='button-list'>
                        <div className='btn-icon'>{iconCall}</div>
                        <div className='btn-text'>Calls</div></NavLink>
                    </li>
                    <li><NavLink to='/contacts' className='button-list'>
                        <div className='btn-icon'>{iconContacts}</div>
                        <div className='btn-text'>Contacts</div></NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path={'/'} element={<Calls />} />
                    <Route path={'contacts'} element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Nav