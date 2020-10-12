import React, {useState} from 'react'
import './Portfolio.css'
import { Transition, animated } from 'react-spring/renderprops'

function Portfolio() {
    const [body, setBody] = useState(false)
    const [active, setActive] = useState(false)

    const showBody = () => {
        setActive(true)
        setBody(!body)
    }

    return (
        <div className="portfolio">
            <p className="portfolio__header" onClick={showBody}>Portfolio</p>
            {active && 
                <div className="portfolio__body">
                    <Transition
                        native
                        items={body}
                        from={{ opacity: 0, marginTop: -50 }}
                        enter={{ opacity: 1, marginTop: 0 }}
                        leave={{ opacity: 0, marginTop: -50 }}
                        config={{ duration: 1000 }}
                    >
                        {show => show && (props => (
                            <animated.div style={props}>
                            <div className="projects">
                                <div className="project">
                                    <a href="https://insta-reels-b7a1d.web.app/">
                                        <img
                                            src="https://i.pinimg.com/originals/9b/97/87/9b9787fb5209b99c3207554a341e3f32.png"
                                            className='img'
                                            width='150'
                                            height='150'
                                        />
                                    </a>
                                </div>
                                <div className="project">
                                    <a href="https://whats-appz.web.app/">
                                        <img
                                            src="https://www.searchpng.com/wp-content/uploads/2018/12/Splash-Whatsapp-Icon-Png-715x715.png"
                                            className='img'
                                            width='150'
                                            height='150'
                                        />
                                    </a>
                                </div>
                            </div>
                            </animated.div>
                        ))}
                    </Transition>
                </div>
            }
        </div>
    )
}

export default Portfolio
