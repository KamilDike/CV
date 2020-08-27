import React, {useState} from 'react'
import "./Profile.css"
import { Transition, animated } from 'react-spring/renderprops'

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
                //<div className={`${body ? 'profile__bodyShow' : 'profile__bodyHidden'}`}>
                    <Transition
                        native
                        items={body}
                        from={{ opacity: 0, marginTop: -65 }}
                        enter={{ opacity: 1, marginTop: 40 }}
                        leave={{ opacity: 0, marginTop: -65 }}
                        config={{ duration: 1000 }}
                    >
                        {show => show && (props => (
                            <animated.div style={props}>
                                <div className="profile__body">
                                    <p>I am a 3rd year IT student and my hobby is building software.</p> 
                                    <p>I can turn your <span className="idea">IDEA</span> into digital.</p>
                                 </div>
                            </animated.div>
                        ))}
                    </Transition>
                //</div>
            }
            <div className="section__border"/>
        </div>
    )
}

export default Profile
