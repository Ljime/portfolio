import classes from './Main.module.scss'
import { forwardRef } from 'react'

const Main = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={classes.main}>
            <div>
                <h1 className={`${classes.type} ${classes.type1}`}>
                    Hi! My name is Herman.
                </h1>
                <h2 className={`${classes.type} ${classes.type2}`}>
                    Thanks for checking my website out!
                </h2>
            </div>
        </section>
    )
})

export default Main