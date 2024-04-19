import { InstaIcon } from "../../icons/github-icon"
import { LinkedinIcon } from "../../icons/linkedin-icon"

import "./social-btns.scss"

export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://github.com/jpmedeiross">
                <InstaIcon />
            </a>
            <a href="https://www.linkedin.com/in/joaopmedeiros/">
                <LinkedinIcon/>
            </a>
        </div>

    )
}