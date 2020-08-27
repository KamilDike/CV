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
                            <a href="https://slack-clone-172b8.firebaseapp.com/">
                                <img
                                    src="https://lh3.googleusercontent.com/VfpdFf3jaMj51B84gO8yiOtlp9ezTU0ByQ9UK6SIEvAiv5NDOgy7DYRzgbpCnETnX6s"
                                    className='img'
                                    width='300'
                                    height='150'
                                />
                            </a>
                            <a href="https://whats-appz.web.app/">
                                <img
                                    src="https://www.internetmatters.org/wp-content/uploads/2018/02/Whatsapp-logo-pc-600x314.png"
                                    className='img'
                                    width='300'
                                    height='150'
                                />
                            </a>
                            </animated.div>
                        ))}
                    </Transition>
                </div>
            }
        </div>
    )
}

export default Portfolio
