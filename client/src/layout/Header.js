import Link from '../components/UI/Link'
import classes from './Header.module.scss'
import { forwardRef } from 'react'
import ContactInfo from '../components/UI/ContactInfo'
const Header = forwardRef((props, ref) => {

    return (
        <header ref={ref} className={classes.header}>
            <ContactInfo className={classes.contact} />
            <Link onClick={props.onMainScroll}>Home</Link>
            <Link onClick={props.onTechScroll}>Technologies</Link>
            <Link onClick={props.onProjectScroll}>Projects</Link>
            <Link onClick={props.onContactScroll}>Contact Me</Link>
        </header>
    )
})

export default Header