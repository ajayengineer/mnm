import React from 'react'
import { Counter } from '../features/counter/Counter'
import Notification from './Notification'
import UserProfile from './UserProfile'

function Header() {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row d-flex justify-content-evenly'>
                    <div className='col-md-4'>
                        <Notification />
                    </div>
                    <div className='col-md-4'>
                        <Counter />
                    </div>
                    <div className='col-md-4'>
                        <UserProfile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header