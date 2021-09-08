import classes from './Label.module.scss'

const Label = (props) => {
    return (
        <p onClick={props.onClick} className={`${classes.label} ${props.className}`}>{props.children}</p>
    )
}

export default Label