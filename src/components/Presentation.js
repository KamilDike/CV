import React from 'react'
import './Presentation.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Presentation() {
    return (
        <div className="presentation">
            <div className="presentation__left">
                <img
                    className="presentation__leftImg"
                    src="https://i.imgur.com/b5onYPA.jpg"
                />
            </div>
            <div className="presentation__right">
                <p className="presentation__rightName">
                    <a>
                        KAMIL DIKE
                    </a>
                </p>
                <p>Junior Application Developer</p>
                <div>
                    <a className="presentation__rightIcons"
                        href="https://github.com/KamilDike"
                    >
                        <GitHubIcon/>
                    </a>
                    <a className="presentation__rightIcons"
                        href="https://www.linkedin.com/in/kamil-dike-47739b144/"
                    >
                        <LinkedInIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Presentation
