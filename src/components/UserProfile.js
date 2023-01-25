import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

function UserProfile() {
    const [openItem, setOpenItem] = useState(false);

    return (
        <div className='usermenu'>
            <button onClick={() => setOpenItem((prev) => !prev)}>User Profile</button>
            {
                openItem && (<ul className='usermneu__dropdown'>
                    <li><NavLink to="profile">Profile </NavLink></li>
                    <li><NavLink to="setting">Setings </NavLink></li>
                    <li><NavLink to="faq">Faq </NavLink></li>
                    <li><NavLink to="account">Accounts </NavLink></li>
                </ul>)
            }
        </div>
    )
}

export default UserProfile