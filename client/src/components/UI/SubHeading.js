import classes from './SubHeading.module.scss'

const SubHeading = (props) => {
    return (
        <h2 className={`${classes.subheading} ${props.className}`}>
            {props.children}
        </h2>
    )
}

export default SubHeading