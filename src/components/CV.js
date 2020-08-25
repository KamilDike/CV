import React, {useState} from 'react'
import './CV.css'

function CV() {
    const [body, setBody] = useState(false)
    const [active, setActive] = useState(false)

    const showBody = () => {
        setActive(true)
        setBody(!body)
    }

    return (
        <div className="cv">
            <p className="cv__header" onClick={showBody}>CV</p>

            {active && 
                <div className={`${body ? 'cv__bodyShow' : 'cv__bodyHidden'}`}>
                    <div className="cv__body">
                        <a href="https://1drv.ms/b/s!AkbNsY1YPC8HjJpuElZWwkaMtJUBsA">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAADFBMVEX////cFDzup6/bAC47xqeuAAAA0UlEQVR4nO3QMQHAMAzAsLTjz3kI4qO3BEEzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPLms5mM1h5WcICfICXKCnCAnyAlygpwgJ8gJcoKcICfICXKCnCAnyAlygpwgJ8gJcoKcICfICXKCnCAnyAlygpwgJ8gJcoKcICfICXKCnCAnyAlygpwgJ8gJcoKcICfICXKCnCAnyAlygpwgJ8gJcoKcICfICXKCnCAnyAlygpwgJ8gJcoKcICfICXKCnCAnyAlygpwgJ8gJcoKcICf8zMtmEUHJBe8AAAAASUVORK5CYII="
                            />
                        </a>
                        <a href="https://1drv.ms/b/s!AkbNsY1YPC8HjJpuElZWwkaMtJUBsA">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                                                          />
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}

export default CV
