import classes from './Label.module.scss'

const Label = (props) => {
    return (
        <p className={classes.label}>{props.children}</p>
    )
}

export default Label