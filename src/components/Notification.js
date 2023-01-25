import React, { useState } from 'react'

function Notification() {
    const [openItem, setOpenItem] = useState(false);
    return (
        <div className='notification__menu'>
            <button onClick={() => setOpenItem((prev) => !prev)}>Notifications</button>
            {
                openItem && (<ul className='notification__menu__dropdown'>
                    <li>Notification </li>
                    <li> messages</li>
                    <li>messages</li>
                    <li> messages</li>
                </ul>)
            }
        </div>
    )
}

export default Notification