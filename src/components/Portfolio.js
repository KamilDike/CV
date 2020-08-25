import React, {useState} from 'react'
import './Portfolio.css'

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
                <div className={`${body ? 'portfolio__bodyShow' : 'portfolio__bodyHidden'}`}>
                    <div className="portfolio__body">
                        <a href="https://slack-clone-172b8.firebaseapp.com/">
                            <img
                                src="https://lh3.googleusercontent.com/VfpdFf3jaMj51B84gO8yiOtlp9ezTU0ByQ9UK6SIEvAiv5NDOgy7DYRzgbpCnETnX6s"
                                height='150'
                                width='300'
                            />
                        </a>
                        <a href="https://whats-appz.web.app/">
                            <img
                                src="https://www.internetmatters.org/wp-content/uploads/2018/02/Whatsapp-logo-pc-600x314.png"
                                width='300'
                                height='150'
                            />
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Portfolio
