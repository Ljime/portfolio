import SubHeading from '../components/UI/SubHeading'
import classes from './Technologies.module.scss'
import {forwardRef} from 'react'
import html5 from '../assets/html5.png'
import css3 from '../assets/css3.png'
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import sass from "../assets/sass.png"
import python from "../assets/python.png"

const Technologies = forwardRef((props, ref) => {
    return (
        <section ref={ref} className={classes.section}>
            <div className={classes.subContainer}>
                <SubHeading className={classes.subHeading}>Technologies</SubHeading>
            </div>
            <div className={classes.logoContainer}>
                <img src={html5} alt="HTML5" />
                <img src={css3} alt="CSS3" />
                <img src={javascript} alt="JS" />
                <img src={react} alt="React" />
                <img src={redux} alt="Redux" />
                <img src={sass} alt="SASS" />
                <img src={nodejs} alt="NodeJS" />
                <img src={mongodb} alt="MongoDB" />
                <img src={python} alt='Pythgon'></img>
            </div>
        </section>
    )
})

export default Technologies