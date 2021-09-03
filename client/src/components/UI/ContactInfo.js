import classes from './ContactInfo.module.scss'
import { ReactComponent as Mail } from "../../assets/SVG/mail.svg"
import { ReactComponent as LinkedIn } from "../../assets/SVG/linkedin.svg"
import { useState } from 'react'
const ContactInfo = (props) => {
    const [clicked, setClicked] = useState(false)

    const copyTextHandler = () => {
        navigator.clipboard.writeText('hermanvuongbusiness@gmail.com')
        setClicked((prev) => {
            if(prev) {
                setTimeout(() => setClicked(true))
                return false
            }
            return !prev
        })
    }

    return (
        <div className={`${classes.contactContainer} ${props.className}`}>
            <a rel="noreferrer" href='https://ca.linkedin.com/' target='_blank'>
                <LinkedIn />
            </a>

            <div onClick={copyTextHandler} className={clicked ? classes.clicked : ""}>
                <Mail />
                <p>hermanvuongbusiness@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactInfo