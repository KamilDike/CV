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
                        <p>I am a 3rd year IT student and my hobby is building software.</p> 
                        <p>I can turn your <span className="idea">IDEA</span> into digital.</p>
                    </div>
                </div>
            }
            <div className="section__border"/>
        </div>
    )
}

export default Profile
