import classes from './Link.module.scss'

const Link = (props) => {
    return (
        <p
            className={`${classes.link} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </p>
    )
}

export default Link