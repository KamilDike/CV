import React, {useState} from 'react'
import "./Profile.css"

function Profile() {
    const [body, setBody] = useState(false)
    const [active, setActive] = useState(false)

    const showBody = () => {
        setActive(true)
        setBody(!body)
    }

    return (
        <div className="profile">
            <p className="profile__header" onClick={showBody}>About Me</p>
            {active && 
                <div className={`${body ? 'profile__bodyShow' : 'profile__bodyHidden'}`}>
                    <div className="profile__body">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                </div>
            }
            <div className="section__border"/>
        </div>
    )
}

export default Profile
