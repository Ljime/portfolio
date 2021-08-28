import Link from '../components/UI/Link'
import classes from './SideBar.module.scss'
import { Transition } from 'react-transition-group'
import ContactInfo from '../components/UI/ContactInfo'
const SideBar = (props) => {
    return (
        <Transition in={props.in} unmountOnExit mountOnEnter timeout={200}>
            {state => 
                <div className={`${classes.sidebar} ${state === 'exiting' && classes.exiting}`}>
                    <Link onClick={props.onMainScroll}>Home</Link>
                    <Link onClick={props.onTechScroll}>Technologies</Link>
                    <Link onClick={props.onProjectScroll}>Projects</Link>
                    <Link onClick={props.onContactScroll}>Contact Me</Link>
                    <ContactInfo className={classes.contact} />
                </div>
            }
        </Transition>
    )
}

export default SideBar