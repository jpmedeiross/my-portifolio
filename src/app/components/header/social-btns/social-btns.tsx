import { InstaIcon } from "../../icons/github-icon"
import { LinkedinIcon } from "../../icons/linkedin-icon"

import "./social-btns.scss"

export function SocialBtns() {
    return (
        <div className="social">
            <a href="">
                <InstaIcon />
            </a>
            <a href="">
                <LinkedinIcon/>
            </a>
        </div>

    )
}